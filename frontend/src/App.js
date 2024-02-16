import logo from './logo.svg';
import './App.css';
import Login from '../src/Pages/Login'
import Dashboard from './Pages/Dashboard';
import Main from './Pages/Main';
import Checkout from './Pages/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
