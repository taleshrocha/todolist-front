import Folder from "@/components/Folder";
import Task from "@/components/Task";
import Head from "next/head";
import IconButton from "@/components/IconButton";
import {
  AiOutlineEllipsis as EllipsisIcon,
  AiOutlinePlus as PlusIcon,
} from "react-icons/ai";
import { BiMessage as MessageIcon } from "react-icons/bi";
import Menu from "@/components/Menu";
import { TaskContext, TaskProvider } from "@/contexts/TaskContext";
import { useContext } from "react";
import Header from "@/components/Header";

export default function Home(/*{tasks}*/) {
  //console.log(tasks)
  const { isMenuOpen } = useContext(TaskContext)
  return (
    <>
      <Head>
        <title>Todolist</title>
        <meta name="description" content="Todolist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="
        flex
          bg-neutral-900 w-full h-screen
        "
      >
        <Menu/>

        <div className={`
               w-full flex flex-col transition-all duration-500 mt-10 ${isMenuOpen && "!ml-72"}
              `}
        >

          <div className="text-neutral-200 px-12 pt-8 space-y-4">
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
              {/*
            {tasks.map(task => (
              <Task 
                key={task.id}
                task={task}
              />
            ))}
          */}
              <Task task={{ content: "Blah", isDone: false }} />
            </Folder>
          </div>
        </div>
      </main>
    </>
  );
}

//export async function getServerSideProps() {
//  const res = await fetch("http://localhost:8080/task")
//  const tasks = await res.json()
//
//  return {
//    props: {tasks}, // will be passed to the page component as props
//  }
//}
