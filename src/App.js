import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Watchhistory from './pages/Watchhistory';
import Loadpage from './pages/Loadpage';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Foot from './Components/Foot';

function App() {
  return (
    <div>
      
      <Header/>

      <Routes>
        <Route path="/" element={<Loadpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchhistory" element={<Watchhistory />} />
      
    </Routes>
    <Foot/>
      
    </div>
  );
}

export default App;
