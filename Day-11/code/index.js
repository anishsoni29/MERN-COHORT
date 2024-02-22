//ugly version --> no middlewares

const express = require('express');
const app  = express();

app.get('/health-checkup', function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;


  //input validation : user is required to send the kidney ID as well.
  const kidneyId = req.query.kidneyId;

  if (username =="anish" && password == "pass"){
    if (kidneyId ==1 || kidneyId ==2){
      res.json({
        msg:"Your kidney is fine!" 
    })
  } else {
      res.json({
        msg:"Your kidney is not fine :("
      })
    }
  }
  res.status(400).json({msg:"Something is wrong with your input"})
});


//or write it inversely 

const express =  require('express');
const app = 'express';

app.get('/health-checkup', function(req,res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId; //--> input validation

  if (username != "anish" || password != 'pass'{
    res.status(400).json({msg : "Something is up with your inputs!"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2){
    res.status(400).json(msg:"Your kidneys are are not fine!")
    return
  }

  //do something with your kidney here:
  res.json({msg:"Your kidney is fine! :)"})
  
});


app.listen(3000)



//write way of doing input validation --->
//middlewares

//---> this violates the DRY principle if have to make rules of 10 routes 
// hence make functions and optimise the code, the real optimum of the code would be reached by MIDDLEWARES!

// (req,res,next) are the parameters used here

const express = require("express");
const app = 'express';

function userMiddleware(req,res,next){
  if(username != "anish" && password != "pass"){
    res.status(400).json({
      msg:"Incorrect Inputs"
    });
  } else {
    next(); //--> hence it checked the userInput from here and is going to check it for the kidneys from here therefore we used next()
  }
};

function kidneyMiddleware(req,res,next){
  if(kidneyId !=1 && kidneyId !=2){
    res.status(403).json({
      msg:"Incorrect Inputs"
    })
  } else {
    next();
  }
};

app.get('/health-checkup', userMiddleware, kidneyMiddleware , function (req,res){

  //do something with your kidney here

  res.send("Your heart is healthy!")
  //--> here we have checked for the heart using only the userMiddleware parameter because the kidneyMiddleware was not requires. There middlewares here can be used as functions and follow the DRY principle in a code, and make is cleaner and optimised!

//middlewares are a cleaner way to do pre-checks!
})

