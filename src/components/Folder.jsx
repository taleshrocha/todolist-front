import { Children, useState } from "react";
import {
  AiOutlineEllipsis as EllipsisIcon,
  AiOutlineRight as RightIcon,
  AiOutlineDown as DownIcon,
} from "react-icons/ai";
import AddTask from "./AddTask";
import IconButton from "./IconButton";
import Task from "./Task";

export default function Folder({ task, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="flex items-start justify-between text-neutral-200">
        {/*Down/Right buttom*/}
        <IconButton
          className={`sticky top-10 ${
            task.parentTaskId == null && "invisible"
          }`}
          Icon={isOpen ? DownIcon : RightIcon}
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className="flex-1 flex flex-col">
          {/*Folder name*/}
          <div
            className={`flex flex-col sticky top-10 bg-neutral-900 ${
              task.parentTaskId == null && "invisible"
            }`}
          >
            <div className="flex">
              <p className="flex-1">
                Coisas <span className="text-neutral-500">{-1}</span>{" "}
              </p>
              <IconButton Icon={EllipsisIcon} />
            </div>
            <hr className="w-full bg-neutral-600 mt-1" />
          </div>

          {/*All Tasks*/}
          <div
            className={`${
              (isOpen || task.parentTaskId == null) && "!flex !flex-col"
            } hidden`}
          >
            <Task task={task} />
          </div>
        {children}

          <AddTask
            className={`${
              (isOpen || task.parentTaskId == null) && "!flex"
            } hidden mt-3`}
          />
        </div>
      </div>
  );
}
