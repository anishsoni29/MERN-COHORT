const jwt = require('jsonwebtoken');


//decode, verify, generate
const value = {
  name : "Anish",
  accountNumber: "12345"
}

//sign and not generate
const token = jwt.sign(value, "secret");
console.log(token);

// this generated thing here is the chequebook
//if you lose this then you lose access to your account

//and this string can be decoded by someone and he can see the content which was written before parsing it.