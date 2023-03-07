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
import { useContext, useRef, useState } from "react";

export default function Home({ tasks }) {
  const { isMenuOpen } = useContext(TaskContext);
  const [inputText, setInputText] = useState("")
  const [isTaskPostOpen, setIsTaskPostOpen] = useState(false);

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
          flex justify-center
          bg-neutral-900 w-full min-h-screen h-full
        "
      >
        <div
          className={`
                w-2/3 flex flex-col transition-all duration-500 mt-10 ${
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

            {isTaskPostOpen ? (
              <div className="w-full border border-neutral-200 rounded-xl p-2">
                {/*Add task info*/}
                <input
                  placeholder="The name of the task"
                  className="w-full outline-none bg-transparent"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <hr className="w-full bg-neutral-600 my-2" />

                {/*Buttons*/}
                <div className="flex w-full justify-end space-x-2">
                  <button
                    className="font-semibold text-sm rounded-lg bg-neutral-800 p-2 hover:bg-neutral-700"
                    onClick={() => setIsTaskPostOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="font-semibold text-sm rounded-lg bg-red-800 p-2 hover:bg-red-700 disabled:!bg-red-800 disabled:opacity-75 disabled:cursor-not-allowed"
                    disabled={inputText == ""}
                    onClick={() =>
                      {
                        postTask({ content: inputText})
                        setInputText("")
                      }
                    }
                  >
                    Add the task
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="group flex items-center justify-start space-x-4"
                onClick={() => setIsTaskPostOpen(true)}
              >
                {/*"Add a Task" Button*/}
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
            )}
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
