import './App.scss';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import Signin from "./components/signin/Signin";
import Dashboard from './components/dashboard/Dashboard'; 

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
