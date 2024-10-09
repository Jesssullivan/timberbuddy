import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { handler } from '../build/handler.js'

const port = 3000

const app = express()
const index = createServer(app)

const io = new Server(index)

io.on('connection', (socket) => {
    socket.emit('eventFromServer', 'Sockets are live! 👋')
})

app.use(handler)

index.listen(port)
