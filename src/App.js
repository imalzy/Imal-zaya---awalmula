import * as React from "react"
import axios from "axios"
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import Home from "./pages/home"
import About from "./pages/about";

const App = () => {
    return (
        <>

            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>

            </Routes>
        </>
    )
}

export default App