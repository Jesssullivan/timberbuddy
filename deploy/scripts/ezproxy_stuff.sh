#!/bin/bash


## Set default inventory; this can be modified with the presence -d | --dev flag:
DEV=0

## set default inventory paths
INVENTORY_PROD_INIT="inventory_prod";
INVENTORY_DEV_INIT="inventory_dev";

chintzHewow () {
cat << EOF
 _____ ____________                    _____ _          __  __
|  ___|___  /| ___ \                  /  ___| |        / _|/ _|
| |__    / / | |_/ / __ _____  ___   _\  --.| |_ _   _| |_| |_
|  __|  / /  |  __/ '__/ _ \ \/ / | | | --. \ __| | | |  _|  _|
| |___./ /___| |  | | | (_) >  <| |_| /\__/ / |_| |_| | | | |
\____/\_____/\_|  |_|  \___/_/\_\\__,  \____/ \__|\__,_|_| |_|
                                  __/ /
                                 |___/
EOF
};

## Migrate Ezproxy files? (this will overwrite our Ansible templates; this is *just* the migration)
MIG_EZPROXY="Migrate those files!"
MIG_EZPROXYDEF="<$MIG_EZPROXY | No thanks>"
INIT_MIG_EZPROXY=$MIG_EZPROXY

## Setup Ezproxy, gitlab & SAML ##
EZPROXY="Lets Do this!"
EZPROXYDEF="<$EZPROXY | Nah>"
INIT_EZPROXY=$EZPROXY


## Setup sendmail, logrotate, config watcher systemd services?
SYSD_EZPROXY="Setup nifty services!"
SYSD_EZPROXYDEF="<$SYSD_EZPROXY | No thanks :(>"
INIT_SYSD_EZPROXY=$SYSD_EZPROXY

# say hi:
chintzHewow;

## parse: ##
trap "kill 0" EXIT

POSITIONAL=()

while [[ $# -gt 0 ]] ; do
  key="$1"
  case $key in
        -e | --env)
          ENV=$2
        shift
        shift
        ;;
        -d | --dev)
          DEV=1
        shift
        shift
        ;;
        -dn | --dev-node)
          HOSTNODE=$2
        shift
        shift
        ;;
       -on | --old-node)
          OLDNODE=$2
        shift
        shift
        ;;
        *) # unknown arg
        echo -e "\n Received an unknown argument!  Exiting...\n"
        POSITIONAL+=("$1")
        exit 0
        ;;
    esac
done


if  [[ $DEV == 1 ]]; then
  ## Set Dev inventory ##
  INVENTORY=$INVENTORY_DEV_INIT;
  ## New Node defaults ##
  HOSTNODE="vmnode790.bates.edu"
  ## Old Dev Node defaults ##
  OLDNODE="vmnode704.bates.edu"
else
  ## Set Prod inventory ##
  INVENTORY=$INVENTORY_PROD_INIT;
  ## New Node defaults ##
  HOSTNODE="vmnode789.bates.edu"
  ## Old Node defaults ##
  OLDNODE="vmnode704.bates.edu"
fi

# set default read parameters:
HOSTNODEDEF=$HOSTNODE
OLDNODEDEF=$OLDNODE

echo -e "1. Set your hosts accordingly: "
read -p "New Node: [<$HOSTNODEDEF>]: " HOSTNODE
HOSTNODE=${HOSTNODE:-$HOSTNODEDEF}
echo

read -p "Old Node: [<$OLDNODEDEF>]: " OLDNODE
OLDNODE=${OLDNODE:-$OLDNODEDEF}
echo

## convert these responses to booleans: ##
read -p "Migrate existing Ezproxy files to new server?: [$MIG_EZPROXYDEF]: " MIG_EZPROXY
MIG_EZPROXY=${MIG_EZPROXY:-$MIG_EZPROXYDEF}
echo

read -p "Setup Ezproxy, SAML & gitlab-runner?: [$EZPROXYDEF]: " EZPROXY
EZPROXY=${EZPROXY:-$EZPROXYDEF}
echo

read -p "Setup mail, watcher & systemd services?: [$SYSD_EZPROXYDEF]: " SYSD_EZPROXY
SYSD_EZPROXY=${SYSD_EZPROXY:-$SYSD_PROXYDEF}
echo

LWR_MIG_EZPROXY=$(echo "$MIG_EZPROXY" | tr '[:upper:]' '[:lower:]');
if [[ $MIG_EZPROXY == "$INIT_MIG_EZPROXY" ]] || [[ $LWR_MIG_EZPROXY == "yes" ]] || [[ $LWR_MIG_EZPROXY == "y" ]]; then
    echo -e "\nEnvironment setup:\n...We're doing it!\n...OK, now migrating EZproxy from $OLDNODE --> $HOSTNODE\n..."
    ansible-playbook -i $INVENTORY -K files-migrate.yml --extra-vars "host=${HOSTNODE} ezproxy_orig_host=${OLDNODE}" -l "${HOSTNODE}"
fi

LWR_EZPROXY=$(echo "$EZPROXY" | tr '[:upper:]' '[:lower:]');
if [[ $EZPROXY == "$INIT_EZPROXY" ]] || [[ $LWR_EZPROXY == "yes" ]] || [[ $LWR_EZPROXY == "y" ]]; then
  echo -e "\nEZProxy Stuff:\n...In the thick of it now!\n...OK, Setting up Ezproxy, SAML & gitlab-runner on $HOSTNODE\n..."
  ansible-playbook -i $INVENTORY -K ezproxy-stuff.yml --extra-vars "host=${HOSTNODE} ezproxy_orig_host=${OLDNODE}" -l "${HOSTNODE}"
fi


LWR_SYSD_EZPROXY=$(echo "$SYSD_EZPROXY" | tr '[:upper:]' '[:lower:]');
if [[ $SYSD_EZPROXY == "$INIT_SYSD_EZPROXY" ]] || [[ $LWR_SYSD_EZPROXY == "yes" ]] || [[ $LWR_SYSD_EZPROXY == "y" ]]; then
  echo -e "\nSystem Integration:\n...Almost done now, great job!\n...OK, now setting up nifty integrations:\n -
  Database Config Watcher Service \n - Sendmail Utility \n - Log Rotation Service \n - StatusCake Push Integration \n ..."
  ansible-playbook -i $INVENTORY -K services.yml --extra-vars "host=${HOSTNODE} ezproxy_orig_host=${OLDNODE}" -l "${HOSTNODE}"
fi

echo -e "\nFinally, starting EZproxy Service\n..."
ansible-playbook -i $INVENTORY -K ezproxy-up.yml --extra-vars "host=${HOSTNODE} ezproxy_orig_host=${OLDNODE}" -l "${HOSTNODE}"

echo -e "\n...\n...all done!"
exit 0;
