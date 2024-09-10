# TimberBuddy deploy:

Automated deployments to Timber Buddy controllers.

On the pi w/ pi connect installed and working::
```
GITHUB_CLI_VERSION=$(curl -s "https://api.github.com/repos/cli/cli/releases/latest" | grep -Po '"tag_name": "v\K[0-9.]+')
cd ~
curl -Lo gh.deb "https://github.com/cli/cli/releases/latest/download/gh_${GITHUB_CLI_VERSION}_linux_armv6.deb"
sudo dpkg -i gh.deb
gh --version
echo 'YOUR GITHUB API TOKEN' > github_token.txt
gh auth login --with-token < github_token.txt
gh auth status
```

Install:

```shell
# @todo: switch this to a proper release strategy
cd /usr/bin/ && git clone https://github.com/jesssullivan/timberbuddy && cd timberbuddy/deploy
# @todo: add automated w/ network check for updates
sudo chmod +x scripts/setup_venv.sh
./scripts/setup_venv.sh && source timber_venv/bin/activate
ansible-playbook -i inventory_dev -K services.yml --extra-vars "host=raspberrypi" -l "raspberrypi" -u "raspi"
```


