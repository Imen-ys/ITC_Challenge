import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import {LoginForm , Register }from './features/script';
import { Management } from "./script";
function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/management" element={<Management />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
