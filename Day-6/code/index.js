function someSyncTask1(){
  console.log("some sync task 1");
}

function someSyncTask2(){
  console.log("some sync task 2");
}

setTimeout(function(data){
  someSyncTask1(data);
},2000);



// Promisified Calling -->
function promisifiedTimeout(duration){
  const p = new Promise(function(resolve){
    setTimeout(resolve, duration);
  })
  return p
}
promisifiedTimeout(1000).then(function(){
  console.log("Calling the promise")
})

// Know how to call a promise


