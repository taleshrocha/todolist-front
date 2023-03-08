import Folder from "@/components/Folder";
import Task from "@/components/Task";
import Head from "next/head";
import IconButton from "@/components/IconButton";
import { AiOutlineEllipsis as EllipsisIcon } from "react-icons/ai";
import { BiMessage as MessageIcon } from "react-icons/bi";
import { TaskContext } from "@/contexts/TaskContext";
import { useContext, useEffect } from "react";

export default function Home({ data }) {
  const { isMenuOpen, tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    setTasks(tasks.concat(data));
  }, []);

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
                w-2/3 flex flex-col transition-all duration-500 
                mt-10 ${isMenuOpen && "!ml-72"}
              `}
        >
          {/*Page name*/}
          <div className="text-neutral-200 px-12 pt-8 space-y-4">
            <div className="flex items-center justify-start text-xl">
              <p className="font-bold flex-1">Inbox</p>
              <IconButton Icon={MessageIcon} />
              <IconButton Icon={EllipsisIcon} />
            </div>
          </div>

          {/*Folder*/}
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
  var data = await fetch("http://localhost:8080/task")
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
