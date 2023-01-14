import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutPage from "./components/About/AboutPage";
import DocPage from "./components/Docs/DocPage";
import ContactPage from "./components/Contact/ContactPage";
import DonatePage from "./components/Donate/DonatePage";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/docs" element={<DocPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/donate" element={<DonatePage/>}/>
          </Routes>
      </Router>

  );
}

export default App;
