import express, { Express } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Gpio } from 'onoff';
import { handler } from '../build/handler.js';
//
//const LED = new Gpio(4, 'out'); // Use GPIO pin 4 as output
//const pushButton = new Gpio(17, 'in', 'both'); // Use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

const port = 3000;

const app: Express = express();
const index: HttpServer = createServer(app);

const io: SocketIOServer = new SocketIOServer(index);

io.on('connection', (socket: Socket) => {
    socket.emit('eventFromServer', 'Sockets are live! 👋');
});

app.use(handler);

index.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});