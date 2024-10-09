import express from 'express';
import { createServer, Server as HttpServer } from 'http';
import {Server as SocketIOServer, Socket} from 'socket.io';
import { handler } from '../build/handler.js';

import * as readline from 'readline';
import { ReadStream } from 'tty';

// Emit keypress events for the process.stdin
readline.emitKeypressEvents(process.stdin);

if ((process.stdin as ReadStream).isTTY) {
  (process.stdin as ReadStream).setRawMode(true);
}


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
  // store panel button status as boolean values;
  // we'll emit false when a task is complete,
  // we'll remain true while a task is completing

  let nextCutBtnRunning: boolean = false;
  let setRefBtnRunning: boolean = false;
  let toggleBtnRunning: boolean = false;
  let raiseBtnRunning: boolean = false;

  // hardware socket handlers:
  console.log('socket connection is live...')
  process.stdin.on('keypress', (chunk, key) => {

    if (key && key.name === 'n') {
      nextCutBtnRunning = true;
      socket.emit('nextCutBtn', nextCutBtnRunning);
      console.log('Hardware: received Next Cut socket command')
     }

    if (key && key.name === 's') {
      setRefBtnRunning = true;
      socket.emit('setRefBtn', setRefBtnRunning);
      console.log('Hardware: received Set Ref socket command')
    }

    if (key && key.name === 't') {
      toggleBtnRunning = true;
      socket.emit('toggleBtn', toggleBtnRunning);
      console.log('Hardware: received Toggle Mode command')
    }

    if (key && key.name === 'r') {
      raiseBtnRunning = true;
      socket.emit('raiseBtn', raiseBtnRunning);
      console.log('Hardware: received Raise command')
    }

    if (key && key.name === 'q') {
      process.exit();
    }
  });

  // client socket handlers:
  socket.on('nextCutBtn', (data: boolean) => { // Get light switch status from client
    nextCutBtnRunning = data;
    if (nextCutBtnRunning) {
      console.log('preforming next cut sequence...')
      stdDelay(1000).then(() => {
        console.log('...completed next cut sequence')
        nextCutBtnRunning = false;
        socket.emit('nextCutBtn', raiseBtnRunning);
      })
    }
  });
});

process.on('SIGINT', () => { // On ctrl+c
  process.exit(); // Exit completely
});