import logo from './logo.svg';
import './App.css';
import Form from './component/form';
import Getdata from './component/getpage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './component/login/login';

function PrivateRoute({ element }) {
  const token = sessionStorage.getItem('token');
  console.log("Token in PrivateRoute:", token); // Debugging
  
  return token ? element : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/viewusers" element={<PrivateRoute element={<Getdata />} />} />
      </Routes>
    </Router>
  );
}

export default App;
