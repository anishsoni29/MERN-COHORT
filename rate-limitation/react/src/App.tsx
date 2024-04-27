import React, { useState } from "react";
import axios from "axios";

import { Turnstile } from "@marsidev/react-turnstile";

import "./App.css";

function App() {
  const [token, setToken] = useState<string>("");

  const [otp, setOtp] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleUpdatePassword = () => {
    axios
      .post("http://localhost:3000/reset-password", {
        email: "sonianish441@gmail.com",
        otp: otp,
        token: token,
        newPassword: newPassword,
      })
      .then((response) => {
        console.log(response.data); // Handle success response
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      {/* Turnstile component */}
      <Turnstile
        onSuccess={(token) => {
          setToken(token);
        }}
        siteKey="0x4AAAAAAAXtEe2JIeAEUcjX"
      />

      {/* Update Password button */}
      <button onClick={handleUpdatePassword}>Update Password</button>
    </>
  );
}

export default App;
