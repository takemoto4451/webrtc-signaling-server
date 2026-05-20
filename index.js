import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 10000 });

wss.on("connection", ws => {
  ws.on("message", msg => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === 1) {
        client.send(msg);
      }
    });
  });
});
