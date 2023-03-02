import Folder from "@/components/Folder";
import Header from "@/components/Header";
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
          bg-neutral-900 w-full min-h-screen h-full
        "
      >
        <Header/>
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
