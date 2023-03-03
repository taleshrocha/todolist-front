import { useState } from "react";
import { BsTrash as TrashIcon } from "react-icons/bs";

export default function Task() {
  const [isDone, setIsDone] = useState(false);
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
          Lavar gato
        </p>
        <TrashIcon className="invisible group-hover:visible"/>
      </div>

      <hr className="w-full bg-neutral-600 mt-3" />
    </div>
  );
}
