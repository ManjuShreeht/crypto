
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={[<Home />]} />
          <Route path='/dashboard' element={[<Dashboard />]}/>
          <Route path='/coin/:id' element={[<CoinPage />]}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
