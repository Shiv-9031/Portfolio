/*----------------------------pages link-----------------------*/
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Certificates from "./pages/Cerftificates";
/*------------------------------------------------------------*/
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
