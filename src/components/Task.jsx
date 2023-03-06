import { useEffect, useState } from "react";
import { BsTrash as TrashIcon } from "react-icons/bs";

export default function Task({task}) {
  const [isDone, setIsDone] = useState(task.isDone);

  //useEffect(() => {

  //  return () => {
  //    console.log("END AHHHHH")
  //    fetch(`http://localhost:8080/task/${task.id}`, {
  //      method: "PUT",
  //      mode: "cors",
  //      cache: "no-cache",
  //      credentials: "same-origin",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      redirect: "follow",
  //      referrerPolicy: "no-referrer",
  //      body: JSON.stringify({ 
  //        content: task.content ,
  //        isDone: isDone
  //      }),
  //    })
  //      //.then((response) => response.json())
  //      //.then((data) => {
  //      //  console.log(data)
  //      //})
  //  }
  //}, [])

  return (
    <div className="group flex flex-col items-start justify-center w-full mt-3 cursor-pointer">
      {/*Checkbox and task name*/}
      <div className="flex justify-start items-center w-full space-x-2">
        <input
          className="
          w-5 h-5
          rounded-md bg-transparent text-gray-400
          border-2 border-gray-400 focus:ring-0 cursor-pointer
        "
          type="checkbox"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
        />
        <p
          className={`${
            isDone && "line-through !text-gray-400"
          } flex-1 text-white font-semibold`}
        >
          {task.content}
        </p>
        <TrashIcon className="invisible group-hover:visible"/>
      </div>

      <hr className="w-full bg-neutral-600 mt-3" />
    </div>
  );
}
