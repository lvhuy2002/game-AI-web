import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComp from "./comp/Header/HeaderComp.js";
import HomePage from './comp/HomePage/HomePage';
import MagicTouchGame from './comp/MagicTouch/MagicTouchGame';
function App() {
    return (
        <div className="App">
            <HeaderComp />
            <Routes>
                <Route path = "/" element = {<HomePage />} />  
                <Route path = "/magic_touch" element = {<MagicTouchGame/>} />
            </Routes>
        </div>
    );
}

export default App;
