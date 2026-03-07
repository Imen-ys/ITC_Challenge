import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Management , AddClient , LoginPage , SingUp} from "./script";
function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<SingUp />} />
            <Route path="/management" element={<Management />} />
            <Route path="/add-client" element={<AddClient />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
