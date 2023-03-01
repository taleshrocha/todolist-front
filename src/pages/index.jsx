import Folder from "@/components/Folder";
import Task from "@/components/Task";
import Head from "next/head";

export default function Home() {
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
          flex flex-col items-center 
          bg-gray-900 w-full min-h-screen h-full px-72 py-12 space-y-8
        "
      >
        <h1 className="text-gray-200 font-bold text-4xl">To Do List</h1>
        <p className="text-gray-200 text-xl">+ Add a Task</p>
        <div className="rounded-md h-max w-full">
          <Folder>
            <Task />
            <Task />
            <Task />
          </Folder>
        </div>
      </main>
    </>
  );
}
