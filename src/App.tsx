import "./App.css";
import { Notes } from "./features/homepage";

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <p>Vite is running in {import.meta.env.MODE} mode</p>
            <Notes />
        </>
    );
}

export default App;
