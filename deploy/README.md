# TimberBuddy deploy:

Automated deployments to Timber Buddy controllers.

Setup:

```shell
# from here, ie timberbuddy/deploy:
sudo chmod +x scripts/setup_venv.sh
./scripts/setup_venv.sh && source timber_venv/bin/activate
```


ansible-playbook -i inventory_dev -K pi-setup.yml --extra-vars "host=raspberrypi" -l "raspberrypi" -u "raspi"
