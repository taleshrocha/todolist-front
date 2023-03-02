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
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <IconButton
          Icon={isOpen ? DownIcon : RightIcon}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="flex-1 flex flex-col">
          <div className="flex">
            <p className="flex-1">Coisas <span className="text-neutral-500">{taskNum}</span> </p>
            <IconButton Icon={EllipsisIcon} />
          </div>
          <hr className="w-full bg-neutral-600 mt-1" />
        </div>
      </div>

      <div className={`${isOpen && "!visible"} invisible`}>{children}</div>
    </div>
  );
}
