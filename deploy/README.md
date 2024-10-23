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
#### over pi connect remote shell:
once tailscale is setup, we can ansible the rest of the things
```shell
#sudo apt update && sudo apt upgrade -y
curl -L https://pkgs.tailscale.com/stable/raspbian/$(lsb_release -cs).noarmor.gpg | sudo tee /usr/share/keyrings/tailscale-archive-keyring.gpg >/dev/null && \
  echo "deb [signed-by=/usr/share/keyrings/tailscale-archive-keyring.gpg] https://pkgs.tailscale.com/stable/raspbian $(lsb_release -cs) main" | sudo tee  /etc/apt/sources.list.d/tailscale.list && 
  sudo apt update && sudo apt install tailscale 

 ## log in ##
  sudo tailscale up -ssh
```


#### On pi w/ tailscale installed and w/ `--ssh` enabled:

```shell
ansible-playbook -i inventory_i2c-dev-pi -K services.yml -v
ansible-playbook -i inventory_remote_dev -K services.yml --extra-vars "host=remote-dev" -l "remote-dev" -u "TimberBuddy"

```


```shell

# for pi connect upon local kiosk role run:
rpi-connect signin
# upon provisioning, you may need to play keys time:
# ssh-copy-id TimberBuddy@<192.168.1.16> 
```
