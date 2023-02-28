import { useState } from "react";

export default function Task() {
  const [isDone, setIsDone] = useState(false)
  return (
    <div className="flex items-center justify-start space-x-2 w-full p-4 cursor-pointer"
    >
      <input
        className="
          w-5 h-5
          rounded-md bg-transparent text-gray-400
          border-2 border-gray-400 focus:ring-0
        "
        type="checkbox"
        checked={isDone}
        onChange={() => setIsDone(!isDone)}
      />
      <p className={`${isDone && "line-through !text-gray-400"} text-white font-semibold`}>Lavar gato</p>
    </div>
  );
}
