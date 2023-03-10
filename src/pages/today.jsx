import Folder from "@/components/Folder";
import Header from "@/components/Header";
import Task from "@/components/Task";
import Head from "next/head";
import IconButton from "@/components/IconButton";
import {
  AiOutlineEllipsis as EllipsisIcon,
  AiOutlinePlus as PlusIcon,
} from "react-icons/ai";
import { BiMessage as MessageIcon } from "react-icons/bi";

export default function Today() {
  return (
    <>
      <Head>
        <title>Todolist | Today</title>
        <meta name="description" content="Todolist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="
          flex flex-col items-center 
          bg-neutral-900 w-full min-h-screen h-full
        "
      >
        <Header />

        <div className="w-full text-neutral-200 px-12 pt-8 space-y-4">
          <div className="flex items-center justify-start text-xl">
            <p className="font-bold flex-1">Inbox</p>
            <IconButton Icon={MessageIcon} />
            <IconButton Icon={EllipsisIcon} />
          </div>

          {/*"Add a Task" Button*/}
          <button className="group flex items-center justify-start space-x-4">
            <div
              className="flex items-center justify-center rounded-full w-4 h-4
              text-red-600 group-hover:bg-red-600 group-hover:text-white"
            >
              <p className="text-2xl font-light">+</p>
            </div>
            <p className="text-gray-200 group-hover:text-red-600">Add a Task</p>
          </button>
        </div>

        <div className="w-full text-neutral-200 px-8 mt-12">
          <Folder>
          </Folder>
        </div>
      </main>
    </>
  );
}
