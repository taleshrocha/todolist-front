import Link from "next/link";

export default function Menu() {
  return (
    <div className={`
          flex flex-col items-center justify-start
          fixed left-0 bg-neutral-800 w-32 min-h-screen h-full
          text-neutral-200 

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
      className="flex w-full hover:bg-neutral-700 items-center justify-center 
      h-12 font-semibold text-2xl"
    >
      {children}
      </Link>

  )
}
