import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard.js";
import Employees from "../pages/Employees.js";
import Departments from "../pages/Departments.js";
import Holidays from "../pages/Holidays.js";
import Teams from "../pages/Teams.js";
import HolidaysList from "../pages/HolidaysList.js"

export default function MobileNav ({ onOpen, ...rest }){

  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard onOpen={onOpen} />
        </Route>
        <Route path="/departments" exact>
          <Departments onOpen={onOpen}/>
        </Route>
        <Route path="/employees" exact>
          <Employees onOpen={onOpen}/>
        </Route>
        <Route path="/holidays" exact>
          <Holidays onOpen={onOpen}/>
        </Route>
        <Route path="/teams" exact>
          <Teams onOpen={onOpen}/>
        </Route>
        <Route path="/holidays/list" exact>
          <HolidaysList onOpen={onOpen}/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}