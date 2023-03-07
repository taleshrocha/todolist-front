import "@/styles/globals.css";
import { TaskProvider } from "@/contexts/TaskContext";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Header />
      <Menu/>
      <Component {...pageProps} />
    </TaskProvider>
  );
}
