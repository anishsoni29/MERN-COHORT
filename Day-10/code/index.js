const zod = require("zod");
const express = require("express");
const app = express();

const schema = zod.array(zod.number());


//create ZOD schema
const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
  kidneys: zod.array(zod.number())
})

app.use(express.json());

app.post ("/health-checkup", function(req,res){
  //kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)
  res.send({
    response
  })
});

app.listen(3000);


//if an array of string with atleast one input return true or not then false
// function validateInput(arr){
//   if(typeof arr == "object" && arr.length >=1 && typeof arr[0] ..etc etc..){
//     return true
//   }
// }

// but if zod -->

const zod = require('zod');

function validateInput(arr){
  const schema = zod.array(zod.number());

  const response = schema.safeParse(arr);
  console.log(response);
}

validateInput([1,2,3]);

//zod is an independent library that is used to validate a schema!

//this is used for string validation -->
// checks whether email is a string, password has 8 letters or not, etc.


const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min()
})