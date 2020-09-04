import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import SignUp from "./components/sign-up";
import Login from "./components/login";
import getUsers from "./components/getUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>This is the strech portion of my node auth1 project</h1>
        <Link to="/signUp">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/getUsers">List users</Link>

        <Route path="/signUp" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/getUsers" component={getUsers} />
        
      </Router>
    </div>
  );
}

export default App;
