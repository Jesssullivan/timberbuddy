import { createServer, IncomingMessage, ServerResponse } from 'http';
import { readFile } from 'fs';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { Gpio } from 'onoff';

const LED = new Gpio(4, 'out'); // Use GPIO pin 4 as output

const nextCut = new Gpio(35, 'in', 'both');
const setRef = new Gpio(36, 'in', 'both');
const toggleMode = new Gpio(37, 'in', 'both');
const raiseSaw = new Gpio(38, 'in', 'both');

const server = createServer(handler);
const io = new SocketIOServer(server);

io.sockets.on('connection', (socket: Socket) => {
  let lightvalue = 0; // Static variable for current status

  nextCut.watch((err, value) => { // Watch for hardware interrupts on pushButton

    if (err) { // If an error
      console.error('There was an error', err); // Output error message to console
      return;
    }
    lightvalue = value;
    socket.emit('light', lightvalue); // Send button status to client
  });

  socket.on('light', (data) => { // Get light switch status from client
    lightvalue = data;
    if (lightvalue != LED.readSync()) { // Only change LED if status has changed
      LED.writeSync(lightvalue); // Turn LED on or off
    }
  });
});

process.on('SIGINT', () => { // On ctrl+c
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
  process.exit(); // Exit completely
});