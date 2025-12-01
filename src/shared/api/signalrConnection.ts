import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7044/chat")
  .withAutomaticReconnect()
  .build();
connection.start().catch(console.error);

export default connection;
