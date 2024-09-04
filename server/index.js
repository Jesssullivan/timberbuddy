import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { handler } from '../build/handler.js'

const port = 3000
const app = express()
const index = createServer(app)

const io = new Server(index)

io.on('connection', (socket) => {
    socket.emit('eventFromServer', 'Hello, World 👋')
})

// SvelteKit should handle everything else using Express middleware
// https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server
app.use(handler)

index.listen(port)