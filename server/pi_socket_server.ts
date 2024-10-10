import express from 'express';
import { createServer, Server as HttpServer } from 'http';
import {Server as SocketIOServer, Socket} from 'socket.io';
import { handler } from '../build/handler.js';
import UNIT_4RELAY from './unit_4relay'
import {Gpio} from 'onoff';

const relayBank = new UNIT_4RELAY();

const nextCut = new Gpio(597, 'in', 'rising', {debounceTimeout: 10});
const setRef = new Gpio(587, 'in', 'rising', {debounceTimeout: 10}); // 36
const toggleMode = new Gpio(590, 'in', 'rising', {debounceTimeout: 10}); // 37
const raiseSaw = new Gpio(591, 'in', 'rising', {debounceTimeout: 10}); // 38

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

relayBank.Init(0);           // Set mode to Async and turn off all relays
//relayBank.switchMode(1);     // Switch to Sync mode


io.sockets.on('connection', (socket: Socket) => {

  nextCut.watch((err, value) => { // Watch for hardware interrupts on pushButton
    socket.emit('nextCutBtn', true);
    console.log('Hardware: received Next Cut socket command');
  });
//
  setRef.watch((err, value) => { // Watch for hardware interrupts on pushButton
    socket.emit('setRefBtn', true);
    console.log('Hardware: received Set Ref socket command')
  });

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
    if (data) {
      console.log('Sawmill: preforming Next Cut sequence...')
      relayBank.relayWrite(1, 1);  // Turn on relay 2
      stdDelay(1000).then(() => {
        relayBank.relayWrite(1, 0);  // Turn on relay 2
        console.log('Sawmill: ...completed Next Cut sequence')
        socket.emit('nextCutBtn', false);
      })
    }
  });

  socket.on('setRefBtn', (data: boolean) => {
    if (data) {
      console.log('Sawmill: preforming Set Ref sequence...')
      stdDelay(1500).then(() => {
        console.log('Sawmill: ...completed Set Ref cut sequence')
        socket.emit('setRefBtn', false);
      })
    }
  });

  socket.on('toggleBtn', (data: boolean) => {
    if (data) {
      console.log('Sawmill: preforming Toggle Mode sequence...')
      stdDelay(1000).then(() => {
        console.log('Sawmill: ...completed Toggle Mode sequence')
        socket.emit('toggleBtn', false);
      })
    }
  });

  socket.on('raiseBtn', (data: boolean) => {
    if (data) {
      console.log('Sawmill: preforming Raise sequence...')
      stdDelay(1000).then(() => {
        console.log('Sawmill: ...completed Raise sequence')
        socket.emit('raiseBtn', false);
      })
    }
  });
});

process.on('SIGINT', () => { // On ctrl+c
  nextCut.unwatch();
  setRef.unwatch(); // Unexport Button GPIO to free resources
  toggleMode.unwatch(); // Unexport Button GPIO to free resources
  raiseSaw.unwatch(); // Unexport Button GPIO to free resources
  nextCut.unexport();
  setRef.unexport(); // Unexport Button GPIO to free resources
  toggleMode.unexport(); // Unexport Button GPIO to free resources
  raiseSaw.unexport(); // Unexport Button GPIO to free resources
  process.exit(); // Exit completely
});
