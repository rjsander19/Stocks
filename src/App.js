import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
