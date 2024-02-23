// let first_name = "Anish "
// let last_name = "Soni"
// let age = "22"
// let isMarried = "false"

// console.log("This person's name is " + first_name + last_name + " and their age is " + age +".")

// if (isMarried == false){
//   console.log("This person is not married, hence he is Happy ;)")
// } else {
//   console.log("This person is married, oh god. Stand for him for 2 minutes :(")
// }


// const ages = [22,33,56,43,21,53,51,12,31,15,64]
// const numberOfPeople = ages.length

// for (i=0; i<numberOfPeople; i++){
//   if (ages[i]%2 != 0){
//     console.log(ages[i]);
//   }
// }


// const personArray = ["Anish", "Gaurav", "Shruti", "Riya"];

// const genderArray = ["male","male","female","female"];

// for(let i=0; i<personArray.length; i++){
//   if (genderArray[i] == "female"){
//     console.log(personArray[i]);
//   }
// }


// const dogArray = ["Tyson", "Ruby", "Jack", "Roadblock", "Jordan"]

// const genderDog = ["male","female","male","male","male"]

// for (i=0; i<dogArray.length; i++){
//   if(genderDog[i] == "female"){
//     console.log(dogArray[i])
//   }
// }

// function sum(a,b){
//   const sumValue = a+b;
//   return sumValue;
// }

// const value = sum(1,2)
// const value2 = sum(1,22)
// console.log(value)
// console.log(value2)

// function calculateArithematic(a,b,type){
//   if (type == "sum"){
//     const value = sum(a,b);
//     return value;
//   }
//   if (type == "minus"){
//     const value = sub(a,b);
//     return value;
//   }
// }

// function sum(a,b){
//   return a+b;
// }

// function sub(a,b){
//   return a-b;
// }

// const value= calculateArithematic(1,2,'sum');
// console.log(value)


function greet(){
  console.log("Hello Anish!")
}

setTimeout(greet, 3*1000)

// this function is used to print the content written inside the console.log after 3000 miliseconds or 3 seconds.