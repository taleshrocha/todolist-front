import { useState } from "react";

export default function AddFolder() {
  const [inputText, setInputText] = useState("");
  const [isFolderPostOpen, setIsFolderPostOpen] = useState(false);

  function postFolder(folderName) {
    fetch(`http://localhost:8080/folder`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(folderName),
    })
      .then((response) => console.log("Added folder: ", response))
      .catch((err) => console.log(err));
  }

  return (
    <button
      className={`group text-white flex justify-center items-center`}
      onClick={() => setIsFolderPostOpen(true)}
    >
      {isFolderPostOpen ? (
        <div className="w-full border border-neutral-200 rounded-xl p-2">
          {/*Add folder info*/}
          <input
            placeholder="The name of the folder"
            className="w-full outline-none bg-transparent"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <hr className="w-full bg-neutral-600 my-2" />

          {/*Buttons*/}
          <div className="flex w-full justify-end space-x-2">
            <button
              className="font-semibold text-sm rounded-lg bg-neutral-800 p-2 hover:bg-neutral-700"
              onClick={() => setIsFolderPostOpen(false)}
            >
              Cancel
            </button>
            <button
              className="font-semibold text-sm rounded-lg bg-red-800 p-2 hover:bg-red-700 disabled:!bg-red-800 disabled:opacity-75 disabled:cursor-not-allowed"
              disabled={inputText == ""}
              onClick={() => {
                postFolder({ name: inputText });
                setInputText("");
              }}
            >
              Add the folder
            </button>
          </div>
        </div>
      ) : (
        <div className="relative flex justify-center items-center opacity-0 
              group-hover:opacity-100 w-full transition-all duration-300">
          <hr className="z-0 absolute w-full bg-red-600 h-[1px] border-0" />
          <p className="z-10 font-bold text-red-600 bg-neutral-900 px-2">
            Add a Folder
          </p>
        </div>
      )}
    </button>
  );
}
