import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { SaleHouse } from "./pages/SaleHouse";
import { Navbar } from "./layouts/Navbar"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sale-house" element={<SaleHouse/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
