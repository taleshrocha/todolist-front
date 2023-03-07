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
import { TaskContext } from "@/contexts/TaskContext";
import { useContext, useRef } from "react";

export default function Home({ tasks }) {
  const { isMenuOpen } = useContext(TaskContext);
  const inputRef = useRef(null);

  function postTask(task) {
    fetch(`http://localhost:8080/task`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(task),
    }).then((response) => console.log("Added task: ", response));
  }

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
        <Menu />

        <div
          className={`
               w-full flex flex-col transition-all duration-500 mt-10 ${
                 isMenuOpen && "!ml-72"
               }
              `}
        >
          <div className="text-neutral-200 px-12 pt-8 space-y-4">
            <div className="flex items-center justify-start text-xl">
              <p className="font-bold flex-1">Inbox</p>
              <IconButton Icon={MessageIcon} />
              <IconButton Icon={EllipsisIcon} />
            </div>

            {/*"Add a Task" Button*/}
            <button
              className="group flex items-center justify-start space-x-4"
              onClick={() =>
                postTask({ content: "Study classes", idDone: false })
              }
            >
              <div
                className="
                  flex items-center justify-center rounded-full w-4 h-4
                  text-red-600 group-hover:bg-red-600 group-hover:text-white
                "
              >
                {/*Add a taks*/}
                <p className="text-2xl font-light">+</p>
              </div>
              <p className="text-gray-200 group-hover:text-red-600">
                Add a Task
              </p>
            </button>

            {/*Add task info*/}
            <div className="w-full border border-white">
              <input
                className="w-full outline-none bg-transparent"
                ref={inputRef}
              />
              <div className="flex w-full justify-end">
                <button>Cancel</button>
                <button
                  onClick={() =>
                    postTask({ content: inputRef.current.value})
                  }
                >
                  Add the task
                </button>
              </div>
            </div>
          </div>

          <div className="w-full text-neutral-200 px-8 mt-12">
            <Folder>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </Folder>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  var tasks = await fetch("http://localhost:8080/task")
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });

  if (!tasks) tasks = [{ content: "Blah", isDone: false, id: 1 }];

  return {
    props: { tasks }, // will be passed to the page component as props
  };
}
