# Timber Buddy Controller

## Thesis:

***Wouldn't it be cool to use a familiar, modern web stack for commercial automation or robotics?***

![](media/demo.gif)


Read on to understand the architecture of this project, why it is built this way and how to build and bend this fun project into your cool product.


---


**User input:**
- Operator interacts with the controller with any of the following inputs:
  - the Touch screen UI
  - physical front panel buttons
  - Graphically via the web (pi connect, web console or with wireguard / port forwarding)
  - Via SSH

**HID transmission to hardware:**
- Touch screen button presses are communicated via **websocket** to the node server; 
  - All socket communications include a boolean value that is treated like an atomic state;
  - This allows different / concurrent / incidental requests from the hardware to be made by one any number of connected clients (though of course, as a PLC there will only ever by one connected client), with messages only getting accepted if the requested routine is not already active.   This means we do not have to deal with message queues or setup what are fundamentally synchronous routines (move the saw up or down by however much, home the machine, toggle a mode etc) as faux asynchronous jobs.  This is the opposite if how most server / client communications would be setup, but is important to understand because the job executed by the server is literally a single set of sensors, lights, solenoids connected to the pi.
- Physical button presses are also communicated via websocket on the active client connection.

**Data transmission and storage:**
- we use a flat json file to store and ultimately log / rotate data as well as browser localStorage to actively handle data, where the localStorage values are managed via a SvelteKit store.  The use of browserStorage allows the touch UI to display, modify and cache data being used by each *type* of client (stack, core) as well as removes load on the http API and thus the filesystem.
- In the case of timberbuddy, we store Cut size, stack size and total cut count in a static json file.
- Changes to data values to the filesystem are completed via the node POST API. 
- If there is a disagreement between client and server about values, the static file values take presidence
- Jobs executed by the server (ie moving a saw) read from the static file directly.

**Type of client (core / stack in the case of the timberbuddy):**
- Because actions are communicated via active websocket connection, we identify the kind of client and thus kind of job (stack or core, which ingest different cut sizes for example) with the referrer's slug in the socket handshake header. 

**Touchscreen / UI:**
- SvelteKit web application;
  - Pages use the edge runtime
- Runs directly in a browser in kiosk mode
  - Utilizes the Skeleton UI component library 
  - Utilizes Lucide Iconography

**Pi Node Server:**
- The compiled sveltekit application (*client + server*) is served using a custom express node application.
  - The sveltkit application uses the `node-adapter` as part of the vite build process to make this possible.
  - The *Sveltekit application* is responsible for handling the POST API and **creating** and **writing** to the static json data file.  The Sveltekit application is responsible for all http communication.  
- The *node server* is responsible for pi GPIO connections (buttons!) websocket connections, managing atomic hardware state and i2c bus and for **reading** the static json file during routine execution.
- includes keyboard support and does its best to allow for graceful socket, GPIO and fs exit (allowing for the systemd service to properly keep the  service alive)

**About The Darwin Server:**
- I also wrote a development node server for macos that uses keyboard presses as a stand-in for hardware GPIO buttons.  This does not allow for i2c bus communication, but does help troubleshoot socket / http development.  

**Can I use a Vite Server?**
- Yes.  Use the traditional vite dev server for UI development. 

**The i2c bus:**
- Encoder io and relay IO is done via the i2c bus.  I've written drivers for two M5 i2c devices in Typescript depending solely on the `raspi-i2c` library. These are modeled after the example C++ classes shared by M5 stack on github.  Synchronous methods are used wherever possible.  

**Deployment:**
- Leverages pi connect for initial remote connection and the initial tailscale / wiregaurd daemon setup for SSH.
- Uses ansible to deploy and build the entire application- roles include:
  - `kiosk`: sets up vanilla bookworm image with:
    - tailscale daemon, gh & git tokens, custom wayland config, wayfire kiosk mode and executable kiosk mode.
  - `pi-setup`: 
    - enable i2c, linger support, splashboot configs, support for waveshare DSI display on wayland
    - establishes network uptime cron daemon, network logging, wlan config, network depends
  - `waveshare-dsi`:
    - sets up OEM brightness control utility for waveshare DSI display 
  - `node-server`:
    - sets up all kinds of node server related stuff
    - fetches source from git w/ token, sets up nodegyp, pnpm
    - Compiles sveltekit application and installs as the complete node application as a systemd service
  - `splash-kernel`:
    - began work on custom kernel and splash animation (pending completion by local artist) for virtualized dev environment

**Testing**
- I've included both python and cython implementations of the i2c example c++ classes provided by m5 stack.  
- demo encoder logging and relay toggling implementations are included with the typescript class files.  
- Currently, demo routines in the node server file are using timers for demo the atomic socket behavior while the saw is moving; switching this to read from the encoder and wait to reach a desired encoder reading is trivial. Similarly, moving these actual machine to class files is inevitable, all the functionality is there and ready to go.

## Why this way?  Doesn't this seem way more complicated than it should be?
- In order to satisfy the requirements of fully remote development, a network enabled device with well documented GPIO, i2c IO, touchscreen IO etc really calls for a raspberry pi or similarly full-blown 64 computer.  
- Being able to clone SD cards interoperability with long term support from the pi foundation was identified as a plus by collaborators.
- The customer / collaborators indicated a desire for over the air updates or modifications.  
- The recent (at the time) beta release of pi connect and wayland screen sharing on pi made boot strapping the setup of a pi completely remotely without needing to coach anyone through major technical hurdles pretty easy.
- Jess is familiar with sveltekit in her professional work.  Using a modern web stack for UI UX as well as robotics with real hardware is sort of a holy grail for her.  There are lots of web engineers, and this stack is not tied to any particular vendor or mutable license.   
- My use of a combination of socket / http API protocols and data transmission solutions (localStorage, svelte writable store, flat file) can surely be simplified and improved upon, this is just the solution I've come up with.  

---

## Setup from scratch:

### What you need:

- A raspberry pi 5 running the latest pi os using wayland. (at the time of writing, this is the Bookworm release)
  - If you are doing 100% remote development, you'll need a free pi connect account and a tailnet (or any similar vpn solution with a public control plane)
- [this waveshare DSI display: SKU 21229](https://www.waveshare.com/8inch-dsi-lcd.htm)
- [this i2c relay bank module: SKU U097](https://shop.m5stack.com/products/4-relay-unit?srsltid=AfmBOopeb1VvwA0WJMs-tyo0icalEB23Ua50P2QP5g7hMfUKjqunKfJv)
- [this i2c encoder module SKU U161](https://shop.m5stack.com/products/ext-encoder-unit-stm32f030?srsltid=AfmBOopV67NfXJC9uBYsKlOr9E6iXiTUIv2RYjmQ5uZOGiynx3wHIkUh)
- 4x momentary push buttons
- 4x 10k resistors (for GPIO buttons)
- 4x 1k resistors (for GPIO buttons)
- a 5v power supply for the pi (I used a 5v meanwell din module I converted to work as a variable supply)
- a power supply for your solenoids (in my case a 12v meanwell din unit)
- some stuff to toggle (in my dev unit, I used these [12v pilot lamps](https://www.amazon.com/dp/B0CYG8YGP3?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1) to simulate hydrolytic solenoids firing)
- an encoder to read from

#### Most importantly:

***Expertise in typescript, sveltekit, postcss, websocket programming, tailwind, vite adapters, ansible deployment strategies, node server development, express applications, debugging with cython, i2c bus programming, atomic execution paradigms, linux init systems, wayland for HID implementations, NIC and SOC power management on SBCs and shell scripting.  This project is not done.  This repo is provided as an as-is archive of work.***


## How to build it:


#### for development:

- local depends: 
  - you'll need node v20 and pnpm, npx, tsx installed.

```shell
git clone https://github.com/jesssullivan/timberbuddy && cd timberbuddy
pnpm i
pnpm run build

# just sveltekit applications; live reload:
pnpm run dev

# on macos with node server; no hot reload, no i2c:
pnpm run darwin-start

# on pi with production server:
pnpm run pi-start
```

#### for deployment:

```shell
# from your local machine:
git clone https://github.com/jesssullivan/timberbuddy && cd timberbuddy/deploy
sudo chmod +x scripts/setup_venv.sh
./scripts/setup_venv.sh && source timber_venv/bin/activate
```

#### over pi connect in it's remote shell:
```shell
# once tailscale is setup, we can ansible the rest of the things:
curl -L https://pkgs.tailscale.com/stable/raspbian/$(lsb_release -cs).noarmor.gpg | sudo tee /usr/share/keyrings/tailscale-archive-keyring.gpg >/dev/null && \
  echo "deb [signed-by=/usr/share/keyrings/tailscale-archive-keyring.gpg] https://pkgs.tailscale.com/stable/raspbian $(lsb_release -cs) main" | sudo tee  /etc/apt/sources.list.d/tailscale.list && 
  sudo apt update && sudo apt install tailscale 

 ## log in:
sudo tailscale up -ssh # use your local machine to login into to control plane with the generated url
```

#### from controller:
 
```shell
# run like any ansible playbook; you'll be prompted for a github key for the remote clone / build / install

# something to the tune of:
ansible-playbook -i inventory_remote_dev -K services.yml --extra-vars "host=remote-dev" -l "remote-dev" -u "TimberBuddy"
```


#### connect / tailscale troubleshooting:
```shell
# for pi connect upon local kiosk role run:
rpi-connect signin

# upon reprovisioning, you may need to play keys time:
ssh-copy-id <TimberBuddy>@<pi-ipv4> 
```

![](media/TimberBuddy.png)