import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected to server");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Message received: ", message.data);
      setLatestMessage(message.data);
    };
    setSocket(socket);
  }, []);

  if (!socket) {
    return <div>Connecting to the Socket Server!</div>;
  }
  //while the socket connection is being generated, the user sees Loading..

  return (
    <>
      <input></input>
      <button
        onClick={() => {
          socket.send("Hello World!");
        }}
      >
        Send
      </button>
      {latestMessage}
    </>
  );
}

export default App;
