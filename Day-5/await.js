function anishsAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi there!");
    }, 3000);
  });
  return p;
}

async function main() {
  let value = await anishsAsyncFunction();
  console.log("Hi there!");
}
main();
console.log("After main");

// you can't call the await parameter without
// the async function as it is a part of async function and
//async function needs
// a parameter to be passed inside, hence we used main.
