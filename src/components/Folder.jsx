import { Children, useState } from "react";
import {
  AiOutlineEllipsis as EllipsisIcon,
  AiOutlineRight as RightIcon,
  AiOutlineDown as DownIcon,
} from "react-icons/ai";
import IconButton from "./IconButton";

export default function Folder({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const taskNum = Children.count(children);

  return (

    <div className="flex items-start justify-between">

      {/*Down/RIght buttom*/}
      <IconButton
        className="sticky top-10"
        Icon={isOpen ? DownIcon : RightIcon}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className="flex-1 flex flex-col">
        {/*Folder name*/}
        <div className=" flex flex-col sticky top-10 bg-neutral-900">
          <div className="flex">
            <p className="flex-1">
              Coisas <span className="text-neutral-500">{taskNum}</span>{" "}
            </p>
            <IconButton Icon={EllipsisIcon} />
          </div>
          <hr className="w-full bg-neutral-600 mt-1" />
        </div>

        {/*All Tasks*/}
        <div className={`${isOpen && "!flex !flex-col"} hidden`}>
          {children}
        </div>

      </div>
    </div>
  );
}
