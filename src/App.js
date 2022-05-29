import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About Us/About";
import Contact from "./components/Contact Us/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import ScrollButton from "./utilities/ScrollButton/scrollButton";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/*' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <ScrollButton />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
