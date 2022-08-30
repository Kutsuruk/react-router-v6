import {Route, Routes} from "react-router-dom";
import './App.css'

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <div className='header'>
            <Navbar />
        </div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
