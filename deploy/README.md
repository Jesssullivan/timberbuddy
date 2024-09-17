# TimberBuddy deploy:

Automated deployments to Timber Buddy controllers.

#### Install:

```shell
# @todo: switch this to a proper release strategy
cd /usr/bin/ && git clone https://github.com/jesssullivan/timberbuddy && cd timberbuddy/deploy
# @todo: add automated w/ network check for updates
sudo chmod +x scripts/setup_venv.sh
./scripts/setup_venv.sh && source timber_venv/bin/activate
```

#### On pi w/ tailscale installed and w/ `--ssh` enabled:

```shell
ansible-playbook -i inventory_dev -K services.yml --extra-vars "host=timberbuddy-dev" -l "timberbuddy-dev" -u "TimberBuddy"
```


```shell

# for pi connect upon local kiosk role run:
rpi-connect signin
# upon provisioning, you may need to play keys time:
# ssh-copy-id jsullivan2@<192.168.1.16> 
```

