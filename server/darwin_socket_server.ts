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

  // hardware socket handlers:
  console.log('socket connection is live...')
  process.stdin.on('keypress', (chunk, key) => {

    if (key && key.name === 'n') {
      socket.emit('nextCutBtn', true);
      console.log('Hardware: received Next Cut socket command')
     }

    if (key && key.name === 's') {
      socket.emit('setRefBtn', true);
      console.log('Hardware: received Set Ref socket command')
    }

    if (key && key.name === 't') {
      socket.emit('toggleBtn', true);
      console.log('Hardware: received Toggle Mode command')
    }

    if (key && key.name === 'r') {
      socket.emit('raiseBtn', true);
      console.log('Hardware: received Raise command')
    }

    if (key && key.name === 'q') {
      process.exit();
    }
  });

  // client socket handlers
  socket.on('nextCutBtn', (data: boolean) => {
    if (data) {
      console.log('Sawmill: preforming Next Cut sequence...')
      stdDelay(1000).then(() => {
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
  process.exit(); // Exit completely
});