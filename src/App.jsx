import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
<<<<<<< HEAD
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            {/*  */}
            <Header tasks={tasks} />
            {/*  */}
            <Create tasks={tasks} settasks={settasks} />
            {/*  */}
            <Show tasks={tasks} settasks={settasks} />
=======
    
    
    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header/>
            <Create/>
            <Show/>
>>>>>>> 397d0f5 (first commit)
        </div>
    );
};

export default App;