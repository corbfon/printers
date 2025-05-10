import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PrinterDetail from "./components/PrinterDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/printers/:id" element={<PrinterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
