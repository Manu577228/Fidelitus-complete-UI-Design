import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Login/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Router>
     <Navbar/>
     </Router>
    </div>
  );
}

export default App;
