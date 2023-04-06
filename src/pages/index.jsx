import Folder from "@/components/Folder";
import Task from "@/components/Task";
import Head from "next/head";
import IconButton from "@/components/IconButton";
import { AiOutlineEllipsis as EllipsisIcon } from "react-icons/ai";
import { BiMessage as MessageIcon } from "react-icons/bi";
import { TaskContext } from "@/contexts/TaskContext";
import { useContext } from "react";
import AddFolder from "@/components/AddFolder";

export default function Home({ data }) {
  const { isMenuOpen } = useContext(TaskContext);

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
          bg-neutral-900 w-full min-h-screen h-full pb-20
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

          {data.map((folder) => (
            <Folder
              key={folder.id}
              folderId={folder.id}
              name={folder.name}
              tasksNum={folder.tasks.length}
            >
              {folder.tasks.map((task) => (
                <Task
                  key={task.id}
                  content={task.content}
                  _isDone={task.isDone}
                />
              ))}
            </Folder>
          ))}
          <AddFolder />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  var data = await fetch("http://localhost:8080/folder")
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
