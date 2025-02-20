const express = require('express');
const { Server } = require('ws');
const { Document, NotificationMessage } = require('./document');

const app = express();
const PORT = process.env.PORT || 8080;

const documents = Array.from(
    { length: Math.floor(Math.random() * 6) + 5 },
    () => new Document()
);

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

app.get('/documents', (_req, res) => {
    res.json(documents);
});

app.get('/notifications', (req) => {
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
        wss.emit('connection', ws, req);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const wss = new Server({ noServer: true });

setInterval(() => {
    const newDocument = new Document();
    documents.push(newDocument);

    wss.clients.forEach(client => {
        const notification = new NotificationMessage(newDocument);
        client.send(JSON.stringify(notification));
    });
}, Math.floor(Math.random() * 1000) + 4000);

wss.on('connection', (ws) => {
    console.log('New WebSocket connection established');
    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});
