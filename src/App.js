import './App.css';
import Login from './pages/Login'
import Reset from './pages/Reset'
import Home from './pages/Home'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="reset" element={ <Reset/> } />
        </Routes>
      </header>
    </div>
  );
}

export default App;
