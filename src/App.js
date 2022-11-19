import "./styles/App.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from "./components/common/Splash";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";


function App() {
  return (
       <Router>
        <div className="App">

          <Routes>
              <Route path="/" element={<Splash/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
          </Routes>

        </div>
       </Router>
  )
}

export default App;
