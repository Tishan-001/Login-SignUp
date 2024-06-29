import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import SignInSide from './pages/SignIn';
import SignUpSide from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <SignInSide/> : <Navigate to="/dashboard"/>}/>
        <Route path='/signup' element={!isAuthenticated ? <SignUpSide/> : <Navigate to="/dashboard"/>}/>
        <Route path='/dashboard' element={isAuthenticated ?<Dashboard/> : <Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App
