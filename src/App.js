import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './comp/Header/HeaderComp.js';
import HeroSection from './comp/HeroSection/HeroSection';
import HomePage from './comp/HomePage/HomePage';
import MagicTouchGame from './comp/MagicTouch/MagicTouchGame';
function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Routes>
                <Route path = "/" element = {<HomePage />} />  
                <Route path = "/magic_touch" element = {<MagicTouchGame/>} />
            </Routes>
        </div>
    );
}

export default App;
