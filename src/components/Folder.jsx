import { useState } from "react";
import {
  AiOutlineEllipsis as EllipsisIcon,
  AiOutlineRight as RightIcon,
  AiOutlineDown as DownIcon,
} from "react-icons/ai";
import AddTask from "./AddTask";
import IconButton from "./IconButton";

export default function Folder({ name, tasksNum, folderId, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-start justify-between text-neutral-200 my-2">
      {/*Down/Right buttom*/}
      <IconButton
        className={`sticky top-10`}
        Icon={isOpen ? DownIcon : RightIcon}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className="flex-1 flex flex-col">
        {/*Folder name*/}
        <div className={`flex flex-col sticky top-10 bg-neutral-900`}>
          <div className="flex">
            <p className="flex-1">
              {name} <span className="text-neutral-500">{tasksNum}</span>
            </p>
            <IconButton Icon={EllipsisIcon} />
          </div>
          <hr className="w-full bg-neutral-600 mt-1" />
        </div>

        <div className={`${isOpen && "!flex flex-col"} hidden space-y-2`}>
          {children}
          <AddTask folderId={folderId} />
        </div>
      </div>
    </div>
  );
}
