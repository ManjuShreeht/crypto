
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import Compare from './pages/Compare';
import WatchListPage from './pages/WatchListPage';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={[<Home />]} />
          <Route path='/dashboard' element={[<Dashboard />]}/>
          <Route path='/coin/:id' element={[<CoinPage />]}/>
          <Route path='/compare' element={[<Compare />]}/>
          <Route path='/watchList' element={[<WatchListPage/>]}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
