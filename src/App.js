import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutPage from "./components/About/AboutPage";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
          </Routes>

      </Router>



  );
}

export default App;
