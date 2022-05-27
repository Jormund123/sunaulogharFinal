import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollButton from "./utilities/ScrollButton/scrollButton";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/*' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
                <ScrollButton />
            </BrowserRouter>
        </div>
    );
}

export default App;
