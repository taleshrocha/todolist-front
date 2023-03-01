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
          flex
          bg-gray-900 w-full min-h-screen h-full p-20
        "
      >
        <div className="border-2 border-gray-200 rounded-md h-max w-full">
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
