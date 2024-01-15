import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          console.log(value);
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          console.log(value);
          setDescription(e.target.value); // Fixed this line
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          //axios : library to make http requests
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async function (res) {
              const json = await res.json();
              alert("Todo Added!");
            })
            .catch((error) => {
              console.error("Error adding todo:", error);
            });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
