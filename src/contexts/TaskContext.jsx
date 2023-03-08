import { createContext, useState } from "react";

export const TaskContext = createContext({});

export function TaskProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { content: "Default", isDone: false, id: 0 },
    { content: "Default", isDone: false, id: -1 },
    { content: "Default", isDone: false, id: -2 },
    { content: "Default", isDone: false, id: -3 },
    { content: "Default", isDone: false, id: -4 },
    { content: "Default", isDone: false, id: -5 },
    { content: "Default", isDone: false, id: -6 },
    { content: "Default", isDone: false, id: -7 },
    { content: "Default", isDone: false, id: -8 },
    { content: "Default", isDone: false, id: -9 },
    { content: "Default", isDone: false, id: -10 },
    { content: "Default", isDone: false, id: -11 },
    { content: "Default", isDone: false, id: -12 },
    { content: "Default", isDone: false, id: -13 },
    { content: "Default", isDone: false, id: -14 },
    { content: "Default", isDone: false, id: -15 },
    { content: "Default", isDone: false, id: -16 },
    { content: "Default", isDone: false, id: -17 },
  ]);

  return (
    <TaskContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, tasks, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
