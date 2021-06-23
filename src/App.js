import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login'
import Navbar from './Components/Login/Navbar';
import Dashboard from './Components/Pages/Dashboard';
import EmployeeContact from './Components/Pages/EmployeeContact';
import Reminder from './Components/Pages/Reminder';
import Reports from './Components/Pages/Reports';
import Calendar from './Components/Pages/Calendar'
import Settings from './Components/Pages/Settings';
import Logout from './Components/Pages/Logout';

function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       <Router>
      <Navbar />
           <Switch>
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path='/employee-contact' exact component={EmployeeContact} />
      <Route path='/reminder' exact component={Reminder} />
      <Route path='/reports' exact component={Reports} />
      <Route path='/calendar' exact component={Calendar} />
      <Route path='/settings' exact component={Settings} />
      <Route path='/logout' exact component={Logout} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
