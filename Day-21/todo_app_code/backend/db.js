//mongoose is the library we are using to connect to the mongo database

//write the code for creating the schema
//create a mongoose schema for this:
// Todo: {
//   title: String;
//   description: String;
//   completed: Boolean;
// }

const mongoose = require("mongoose");
//mongodb url handy
//mongodb://localhost:27017
//.env -- is the right way to commit it and push it to github in real world applications

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

//name for which is todos and schema name is todoSchema
const todo = mongoose.model("todos", todoSchema);

//exporting this schema
module.exports = {
  todo,
};
