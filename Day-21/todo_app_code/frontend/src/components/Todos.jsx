// to get these todos as a input -->
// 1. use props
// 2. use object destructuring --> passing todos as an input array.

// todos = {
//     title: " Go to the Gym"
//     description : " You need to go to the Gym"
// }

export function Todos({ todos }) {
  return (
    //given an array, how to render each component in the array one by one?
    //by using the map function
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
