import "@/styles/globals.css";
import { TaskProvider } from "@/contexts/TaskContext";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Header />
      <Component {...pageProps} />
    </TaskProvider>
  );
}
