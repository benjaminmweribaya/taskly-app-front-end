import { io } from "socket.io-client";

const SOCKET_URL = "https://taskly-app-q35u.onrender.com"; 

export const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"],
  withCredentials: true, 
  reconnection: true, 
  reconnectionAttempts: 5, 
  reconnectionDelay: 2000, 
});
