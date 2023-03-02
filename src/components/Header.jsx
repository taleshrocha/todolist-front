import {
  AiOutlineHome as HomeIcon,
  AiOutlineMenu as MenuIcon,
  AiOutlinePlus as PlusIcon,
  AiOutlineQuestionCircle as QuestionIcon,
  AiOutlineBell as BellIcon,
  AiOutlineSearch as SearchIcon,
} from "react-icons/ai";

export default function Header() {
  return (
    <nav className="flex text-white items-center justify-between h-10 bg-neutral-800 w-screen px-4">
      <div className="flex items-center justify-between text-2xl space-x-2">
        <MenuIcon />
        <HomeIcon />
        <SearchIcon />
      </div>
      <div className="flex items-center justify-between text-2xl space-x-4">
        <PlusIcon />
        <QuestionIcon />
        <BellIcon />
        <img
          className="rounded-full h-8"
          src="https://github.com/taleshrocha.png"
          alt=""
        />
      </div>
    </nav>
  );
}
