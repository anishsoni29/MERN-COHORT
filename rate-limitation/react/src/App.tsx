import React, { useState } from "react";
import axios from "axios";

import { Turnstile } from "@marsidev/react-turnstile";

import "./App.css";

function App() {
  const [token, setToken] = useState<string>("");

  const handleUpdatePassword = () => {
    axios
      .post("http://localhost:3000/reset-password", {
        email: "sonianish441@gmail.com",
        otp: "212334",
        token: "",
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
      <input type="text" placeholder="OTP" />
      <input type="password" placeholder="New Password" />

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
