import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Management , AddClient , LoginPage , SingUp , ClientDashboard , NewAppointment ,
Profile , EditClientPage , ClientVue
} from "./script";
function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<SingUp />} />
            <Route path="/management" element={<Management />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/new-appointment" element={<NewAppointment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-client" element={<EditClientPage />} />
            <Route path="/client-vue" element={<ClientVue />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
