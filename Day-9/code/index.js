const input =  [1,2,3,4,5]
const new_array = []

//looping
for (let i = 0; i<input.length; i++){
  new_array.push(input[i] * 2)
}

console.log(new_array)



//using tranformation function 

function tranform (i){
  return i * 2 
}

input1 = [5,10,15,20,25]
// the transformation function works on the input array 
const ans = input1.map(tranform)
console.log(ans)


// logging only the even array 
const arr = [1,2,3,4,5]

function transform(i){
  if (i % 2==0 ){
    return i
  }
}


const ans1 = input.map(transform).filter(value => value != undefined)
console.log(ans1)