
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import {Routes, Route} from "react-router-dom"




function App() {
  return (
      <div className="App">
          <Navbar/>
            <Routes>
              <Route path="/" element={Home}/>
              <Route path="/detail" element={Detail}/>
              <Route path="/" element={Contact}/>
              <Route path="/" element={Favs}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
