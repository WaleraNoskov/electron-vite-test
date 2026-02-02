import * as signalR from "@microsoft/signalr";

const API_URL = import.meta.env.VITE_API_URL as string;

const ctSignalrConnection = new signalR.HubConnectionBuilder()
  .withUrl(API_URL + "/ctHub")
  .withAutomaticReconnect()
  .build();
ctSignalrConnection.start().catch(console.error);

const hardwareSignalrConnection = new signalR.HubConnectionBuilder()
  .withUrl(API_URL + "/hardwareHub")
  .withAutomaticReconnect()
  .build();
hardwareSignalrConnection.start().catch(console.error);

export { ctSignalrConnection, hardwareSignalrConnection };
