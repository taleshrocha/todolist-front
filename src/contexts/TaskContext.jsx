import { createContext, useState } from "react";

export const TaskContext = createContext({});

export function TaskProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <TaskContext.Provider
      value={{ isMenuOpen, setIsMenuOpen}}
    >
      {children}
    </TaskContext.Provider>
  );
}
