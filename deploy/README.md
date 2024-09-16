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
sudo apt update
sudo apt upgrade -y
curl -L https://pkgs.tailscale.com/stable/raspbian/$(lsb_release -cs).noarmor.gpg | sudo tee /usr/share/keyrings/tailscale-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-archive-keyring.gpg] https://pkgs.tailscale.com/stable/raspbian $(lsb_release -cs) main" | sudo tee  /etc/apt/sources.list.d/tailscale.list
sudo apt update
sudo apt install tailscale

 sudo tailscale up
 ## log in ##
  sudo tailscale up -ssh
```

#### setup interactive auth components:
```shell
ansible-playbook -i inventory_dev -K kiosk.yml --extra-vars "host=192.168.1.16" -l "192.168.1.16" -u "jsullivan2"
```


On the pi w/ pi connect installed and working:
```
ansible-playbook -i inventory_dev -K services.yml --extra-vars "host=192.168.1.16" -l "192.168.1.16" -u "jsullivan2"

```



```shell

# for pi connect upon local kiosk role run:
rpi-connect signin
# upon provisioning, you may need to play keys time:
# ssh-copy-id jsullivan2@<192.168.1.16> 
```

