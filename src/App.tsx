import "./App.css";
import { Notes } from "./features/homepage";

function App() {
    return (
        <div id="app" className="max-w-7xl mx-auto flex text-foreground">
            <Notes />
        </div>
    );
}

export default App;
