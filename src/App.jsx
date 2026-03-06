import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import {LoginForm , Register  }from './features/script';
import { Management , AddClient} from "./script";
function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/management" element={<Management />} />
            <Route path="/add-client" element={<AddClient />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
