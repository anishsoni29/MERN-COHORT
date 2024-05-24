import { useEffect, useState } from "react";

export function Sender() {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "sender" }));
    };
    setSocket(socket);
  }, []);

  async function startSendingVideo() {
    if (!socket) return;

    // create an offer
    const pc = new RTCPeerConnection();
    const offer = await pc.createOffer(); //sdp
    await pc.setLocalDescription(offer);

    pc.onicecandidate = (event) => {
      console.log(event);
      if (event.candidate) {
        socket?.send(
          JSON.stringify({ type: "iceCandidate", candidate: event.candidate })
        );
      }
    };

    socket.send(
      JSON.stringify({ type: "createOffer", sdp: pc.localDescription })
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "createAnswer") {
        pc.setRemoteDescription(data.sdp);
      } else if (data.type === "iceCandidate") {
        pc.addIceCandidate(data.candidate);
      }
    };
  }

  return (
    <div>
      Sender
      <br />
      <br />
      <button onClick={startSendingVideo}>Send Video</button>
    </div>
  );
}
