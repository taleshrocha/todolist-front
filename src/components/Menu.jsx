import { TaskContext } from "@/contexts/TaskContext";
import Link from "next/link";
import { useContext } from "react";

export default function Menu() {
  const {isMenuOpen} = useContext(TaskContext)

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
        Index
      </MenuLink>

      <MenuLink href="/today">
        Today
      </MenuLink>
    </div>
  )
}

function MenuLink({children, ...props}) {
  return (
      <Link 
      {...props}
      className="flex w-full hover:bg-neutral-700 items-center justify-start 
      h-10 rounded-md"
    >
      <p className="ml-2">
      {children}
      </p>
      </Link>

  )
}
