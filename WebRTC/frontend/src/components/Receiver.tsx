import { useEffect } from "react";

export function Receiver() {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/receiver");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };
  }, []);
  return <div>Receiver</div>;
}
