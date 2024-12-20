import express from 'express';
import { createServer, Server as HttpServer } from 'http';
import {Server as SocketIOServer, Socket} from 'socket.io';
import { handler } from '../build/handler.js';
import UNIT_4RELAY from './unit_4relay'
import {Gpio} from 'onoff';
import {readFileSync} from 'fs';

const relayBank = new UNIT_4RELAY();

const nextCut = new Gpio(587,'in', 'both', 'rising', {debounceTimeout: 10});
const setRef = new Gpio(590, 'in', 'both', 'rising', {debounceTimeout: 10}); // 36
const toggleMode = new Gpio(591,'in', 'both', 'rising', {debounceTimeout: 10}); // 37
const raiseSaw = new Gpio(597, 'in', 'both', 'rising', {debounceTimeout: 10}); // 38

const port = 3000;

const app = express();
const index: HttpServer = createServer(app);

const io = new SocketIOServer(index);


io.on('connection', (socket) => {
  socket.emit('eventFromServer', 'Sockets are live! 👋');
});

app.use(handler);

index.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const stdDelay = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

io.sockets.on('connection', (socket: Socket) => {

  try {
      relayBank.Init(0);
  } catch (error) {
      console.error("An error with relayBank.Init(0)", error);
  } finally {
      console.log("Relay bank init continuing...");
  }

  try {
    relayBank.switchMode(1);
  } catch (error) {
      console.error("An error with relayBank.switchMode(1)", error);
  } finally {
      console.log("Relay bank switch mode Continuing...");
  }

  nextCut.watch((err, value) => { // Watch for hardware interrupts on pushButton
    socket.emit('nextCutBtn', true);
    console.log('Hardware: received Next Cut socket command');
  });

  setRef.watch((err, value) => { // Watch for hardware interrupts on pushButton
    socket.emit('setRefBtn', true);
    console.log('Hardware: received Set Ref socket command')
  });
//
  toggleMode.watch((err, value) => { // Watch for hardware interrupts on pushButton
    socket.emit('toggleBtn', true);
    console.log('Hardware: received Toggle Mode command')
  });

  raiseSaw.watch((err, value) => { // Watch for hardware interrupts on pushButton
    socket.emit('raiseBtn', true);
    console.log('Hardware: received Raise command')
  });

  // client socket handlers
  socket.on('nextCutBtn', (data: boolean) => {

    // force client socket refresh
    socket.disconnect()

    if (data) {
      try {

        let _ref = socket.handshake.headers.referer;
        let _source = _ref.substring(_ref.lastIndexOf('/') + 1)
        let _store = JSON.parse(readFileSync('store.json', 'utf-8'))
        let _dist = _source === 'stack' ? _store["stack_height"] : _store["core_height"];

        console.log('Sawmill: preforming Next Cut sequence, moving down ' + _dist)
        relayBank.relayWrite(0, 1);

        stdDelay(800).then(() => {
          relayBank.relayWrite(0, 0);
          relayBank.relayWrite(1, 1);
          stdDelay(1500).then(() => {
            relayBank.relayWrite(1, 0);
            console.log('Sawmill: ...completed Next Cut sequence')
            socket.emit('nextCutBtn', false);

            // ensure unloading
            let _ref = null
            let _source = null
            let _store = null
            let _dist = null
          });
        })

        } catch (error) {
          console.error("An error with nextCutBtn i2c block", error);
      } finally {
          console.log("Next cut button continuing...");
      }
    }
  });

  socket.on('setRefBtn', (data: boolean) => {

    // force client socket refresh
    socket.disconnect()

    if (data) {
      try {
        console.log('Sawmill: preforming Set Ref sequence...')
        console.log(data)

        relayBank.relayWrite(2, 1);
        stdDelay(1500).then(() => {
          relayBank.relayWrite(2, 0);
          console.log('Sawmill: ...completed Set Ref cut sequence')
          socket.emit('setRefBtn', false);
        })
      } catch (error) {
          console.error("An error with setRefBtn i2c block", error);
      } finally {
          console.log("Continuing...");
      }
    }
  });

  socket.on('toggleBtn', (data: boolean) => {

    // force client socket refresh
    socket.disconnect()

    if (data) {
      try {
        console.log('Sawmill: preforming Toggle Mode sequence...')
        stdDelay(400).then(() => {
          relayBank.relayWrite(1, 0);  // Turn on relay 2
          console.log('Sawmill: ...completed Toggle Mode sequence')
          socket.emit('toggleBtn', false);
        })
      } catch (error) {
          console.error("An error with toggleBtn i2c block", error);
      } finally {
          console.log("Continuing...");

          // force client socket refresh
          socket.disconnect()
      }
    }
  });

  socket.on('raiseBtn', (data: boolean) => {

    // force client socket refresh
    socket.disconnect()

    if (data) {
      try {
        console.log('Sawmill: preforming Raise sequence...')
        relayBank.relayWrite(3, 1);
        stdDelay(2000).then(() => {
          relayBank.relayWrite(3, 0);  // Turn on relay 2
          console.log('Sawmill: ...completed Raise sequence')
          socket.emit('raiseBtn', false);
        })
      } catch (error) {
          console.error("An error with raiseBtn i2c block", error);
      } finally {
          console.log("Continuing...");
      }
    }
  });
});

process.on('SIGINT', () => { // On ctrl+c
  try {
    nextCut.unwatch();
    setRef.unwatch(); // Unexport Button GPIO to free resources
    toggleMode.unwatch(); // Unexport Button GPIO to free resources
    raiseSaw.unwatch(); // Unexport Button GPIO to free resources
    nextCut.unexport();
    setRef.unexport(); // Unexport Button GPIO to free resources
    toggleMode.unexport(); // Unexport Button GPIO to free resources
    raiseSaw.unexport(); // Unexport Button GPIO to free resources
    process.exit(); // Exit completely
  } catch (error) {
      console.error("An error with i2c closure", error);
  } finally {
      console.log("Continuing...");
  }

});
