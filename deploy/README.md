# TimberBuddy deploy:

Automated deployments to Timber Buddy controllers.
sed -i "s~console=tty1~console=tty3~" /boot/firmware/cmdline.txt


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
ansible-playbook -i inventory_remote_dev -K services.yml --extra-vars "host=remote-dev" -l "remote-dev" -u "TimberBuddy" -vv

ansible-playbook -i inventory_dev -K kiosk.yml --extra-vars "host=local-dev" -l "local-dev" -u "jsullivan2" -vv
ansible-playbook -i inventory_dev -K pi-setup.yml --extra-vars "host=local-dev" -l "local-dev" -u "TimberBuddy" -vv
ansible-playbook -i inventory_dev -K waveshare-dsi.yml --extra-vars "host=local-dev" -l "local-dev" -u "jsullivan2" -vv
ansible-playbook -i inventory_dev -K node-server.yml --extra-vars "host=local-dev" -l "local-dev" -u "jsullivan2" -vv
ansible-playbook -i inventory_dev -K splash-kernel.yml --extra-vars "host=local-dev" -l "local-dev" -u "jsullivan2" -vv

```


```shell

# for pi connect upon local kiosk role run:
rpi-connect signin
# upon provisioning, you may need to play keys time:
# ssh-copy-id TimberBuddy@<192.168.1.16> 
```

sudo socket_vmnet_client "$(brew --prefix)/var/run/socket_vmnet" \
sudo qemu-system-aarch64 \
-accel hvf \
-m 2048 \
-cpu cortex-a57 -M virt,highmem=off  \
-drive if=none,file=disk.qcow2,format=qcow2,id=hd0 \
-cdrom Rocky-9.4-aarch64-minimal.iso \
-device virtio-blk-device,drive=hd0,serial="dummyserial" \
-serial telnet::4444,server,nowait \
-vga none -device ramfb \
-device usb-ehci -device usb-kbd -device usb-mouse -usb \
-monitor stdio