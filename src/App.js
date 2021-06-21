import { CgNotifications } from 'react-icons/cg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login'
import Navside from './Components/Login/Navside';


import Dashboard from './Pages/Dashboard';
import HrForm from './Pages/HrForm';
import EmployeeList from './Pages/EmployeeList';
import AddOutsideJobCards from './Pages/AddOutsideJobCards';
import AddInsideJobCards from './Pages/AddInsideJobCards';
import ClientDetails from './Pages/ClientDetails';
import AssignedClients from './Pages/AssignedClients';
import Reminder from './Pages/Reminder';
import Report from './Pages/Report';
import Calendar from './Pages/Calendar';
import Notifications from './Pages/Notifications';
import Request from './Pages/Request';

function App() {
  return (
    <div className="App">
       {/* <Login/> */}
      
      <Router>
         <Navside/> 
      <Switch>
         <Route path='/dashboard' exact component={Dashboard} />
         <Route path='/hr-form' exact component={HrForm} />
         <Route path='/employee-list' exact component={EmployeeList} />
         <Route path='/add-outside-job-cards' exact component={AddOutsideJobCards} />
         <Route path='/add-inside-job-cards' exact component={AddInsideJobCards} />
         <Route path='/client-details' exact component={ClientDetails} />
         <Route path='/assigned-clients' exact component={AssignedClients} />
         <Route path='/reminder' exact component={Reminder} />
         <Route path='/report' exact component={Report} />
         <Route path='/calendar' exact component={Calendar} />
         <Route path='/notifications' exact component={Notifications} />
         <Route path='/request' exact component={Request} />
      </Switch>
     </Router> 
     
    
    </div>
  );
}

export default App;
