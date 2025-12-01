import * as signalR from "@microsoft/signalr";

const API_URL = import.meta.env.VITE_API_URL as string;

const connection = new signalR.HubConnectionBuilder()
  .withUrl(API_URL + "/hardwareHub")
  .withAutomaticReconnect()
  .build();
connection.start().catch(console.error);

export default connection;
