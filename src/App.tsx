import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/home'
import { Register } from "./pages/register";
import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { Teste } from './Teste_Hooks'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/teste" element={<Teste />} /> 
      </Routes>
    </Router>
  );
}

export default App;
