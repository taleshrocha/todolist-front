import { Children, useState } from "react";

export default function Folder({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const num = Children.count(children);
  return (
    <div className="flex flex-col items-start justify-start space-x-2 w-full p-4 text-gray-200">
      <div className="flex w-full items-center space-x-2">
        <button
          className={` font-semibold items-center`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Coisas
        </button>
        <div className="flex-1 h-[1.5px] bg-gray-200" />
        <p className={`${!isOpen && "!visible"} font-bold rounded-lg text-center invisible w-6 h-6 bg-gray-200 text-gray-900`}>{num}</p>
      </div>
      <div className={`${isOpen && "!visible"} invisible`}>{children}</div>
    </div>
  );
}
