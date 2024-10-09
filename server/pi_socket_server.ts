import express from 'express';
import { createServer, Server as HttpServer } from 'http';
import {Server as SocketIOServer, Socket} from 'socket.io';
import { handler } from '../build/handler.js';
import UNIT_4RELAY from './unit_4relay'
import {type BinaryValue, Gpio} from 'onoff';

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

const relayBank = new UNIT_4RELAY();
relayBank.Init(0);           // Set mode to Async and turn off all relays
relayBank.switchMode(1);     // Switch to Sync mode

const nextCut = new Gpio(35, 'in', 'both');
// const setRef = new Gpio(36, 'in', 'both');
// const toggleMode = new Gpio(37, 'in', 'both');
// const raiseSaw = new Gpio(38, 'in', 'both');

io.sockets.on('connection', (socket: Socket) => {
  let nextCutBtnValue: BinaryValue = 0; // Static variable for current status
  // let toggleModeBtnValue: BinaryValue = 0; // Static variable for current status
  // let setRefBtnValue: BinaryValue = 0; // Static variable for current status
  // let raiseSawBtnValue: BinaryValue = 0; // Static variable for current status

  nextCut.watch((err, value) => { // Watch for hardware interrupts on pushButton

    if (err) { // If an error
      console.error('There was an error', err); // Output error message to console
      return;
    }
    nextCutBtnValue = value;
    socket.emit('light', nextCutBtnValue); // Send button status to client
  });

  socket.on('light', (data) => { // Get light switch status from client
    nextCutBtnValue = data;

    console.log('preforming next cut sequence')

  });
});

process.on('SIGINT', () => { // On ctrl+c
  nextCut.unexport(); // Unexport Button GPIO to free resources
  process.exit(); // Exit completely
});