const jwt = require("jsonwebtoken");

const contents = {
  name : "Anish",
  accountNumber : 1223234,
  iat : 352321, 
};

const newTokens = jwt.sign(contents, "secret");
console.log(newTokens)


//Try catch
function getLength(name){
  return name.length;
}

try {
  const ans = getLength()
  console.log(ans)
} catch(e){
  //only if any error is thrown on the above lines then only it happens.
}

const ans = getLength()
console.log(ans)
// ---> Throwing and catching exceptions


