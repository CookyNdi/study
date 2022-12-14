import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
