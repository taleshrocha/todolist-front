import { useState } from "react";

export default function AddTask({className}) {
  const [inputText, setInputText] = useState("");
  const [isTaskPostOpen, setIsTaskPostOpen] = useState(false);

  function postTask(task) {
    fetch(`http://localhost:8080/task`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(task),
    }).then((response) => console.log("Added task: ", response));
    //.then(tasks.push(task));
  }
  return (
    <div className={`text-white flex justify-start items-center ${className}`}>
      {isTaskPostOpen ? (
        <div className="w-full border border-neutral-200 rounded-xl p-2">
          {/*Add task info*/}
          <input
            placeholder="The name of the task"
            className="w-full outline-none bg-transparent"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <hr className="w-full bg-neutral-600 my-2" />

          {/*Buttons*/}
          <div className="flex w-full justify-end space-x-2">
            <button
              className="font-semibold text-sm rounded-lg bg-neutral-800 p-2 hover:bg-neutral-700"
              onClick={() => setIsTaskPostOpen(false)}
            >
              Cancel
            </button>
            <button
              className="font-semibold text-sm rounded-lg bg-red-800 p-2 hover:bg-red-700 disabled:!bg-red-800 disabled:opacity-75 disabled:cursor-not-allowed"
              disabled={inputText == ""}
              onClick={() => {
                postTask({ content: inputText });
                setInputText("");
              }}
            >
              Add the task
            </button>
          </div>
        </div>
      ) : (
        <button
          className="group flex items-center justify-start space-x-4"
          onClick={() => setIsTaskPostOpen(true)}
        >
          {/*"Add a Task" Button*/}
          <div
            className="
                  flex items-center justify-center rounded-full w-4 h-4
                  text-red-600 group-hover:bg-red-600 group-hover:text-white
                "
          >
            {/*Add a taks*/}
            <p className="text-2xl font-light">+</p>
          </div>
          <p className="text-gray-200 group-hover:text-red-600">Add a Task</p>
        </button>
      )}
    </div>
  );
}
