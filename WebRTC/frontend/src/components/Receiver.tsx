import { useEffect, useRef } from "react";

export function Receiver() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/receiver");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createOffer") {
        const pc = new RTCPeerConnection();
        pc.onicecandidate = (event) => {
          console.log(event);
          if (event.candidate) {
            socket?.send(
              JSON.stringify({
                type: "iceCandidate",
                candidate: event.candidate,
              })
            );
            pc.ontrack = (event) => {
              const video = document.createElement("video");
              document.body.appendChild(video);
              video.srcObject = new MediaStream([event.track]);
              video.play();
            };
          }
        };
        await pc.setRemoteDescription(message.sdp);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socket.send(
          JSON.stringify({ type: "createAnswer", sdp: pc.localDescription })
        );
      } else if (message.type === "iceCandidate") {
        const pc = new RTCPeerConnection();
        pc.addIceCandidate(message.candidate);
      }
    };
  }, []);
  return (
    <div>
      Receiver
      <video ref={videoRef}></video>
    </div>
  );
}
