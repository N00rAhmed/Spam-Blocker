import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import First from "./components/First";
import Main from "./components/Main";
  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/first" element={<First />}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </Router>
  );
}
  
export default App;
