import { TaskContext } from "@/contexts/TaskContext";
import Link from "next/link";
import { useContext } from "react";
import {
  AiOutlineInbox as InboxIcon,
  AiOutlineCalendar as CalendarIcon
} from "react-icons/ai"

export default function Menu() {
  const { isMenuOpen } = useContext(TaskContext)

  return (
    <div className={`
          flex flex-col items-center justify-start mt-10
          fixed bg-neutral-800 w-72 h-screen
          text-neutral-200 
          transition-all duration-500
          p-6
          -translate-x-full ${isMenuOpen && "!translate-x-0 "}
        `}
    >
      <MenuLink href="/">
        <InboxIcon className="text-xl"/>
        <p>
        Inbox
        </p>
      </MenuLink>

      <MenuLink href="/today">
        <CalendarIcon className="text-xl"/>
        <p>
        Today
        </p>
      </MenuLink>
    </div>
  )
}

function MenuLink({ children, ...props }) {
  return (
    <Link
      {...props}
      className="flex w-full hover:bg-neutral-700 items-center justify-start 
      h-10 rounded-md"
    >
      <p className="flex space-x-2 justify-center items-center ml-2">
        {children}
      </p>
    </Link>

  )
}
