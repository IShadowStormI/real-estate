import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Router path="/" element={<Home />}></Router>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
