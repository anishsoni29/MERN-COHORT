const zod = require("zod");
//writing the zod schema for this.

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

//now to export this:
module.exports = {
  createTodo,
  updateTodo,
};
