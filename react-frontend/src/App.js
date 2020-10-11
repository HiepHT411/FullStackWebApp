import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponenet from './Components/HeaderComponenet';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeecomponent from './Components/ViewEmployeecomponent';

function App() {
  return (

    <div>
      <Router>
        
            <HeaderComponenet/>
            <div className = "container">
              <Switch> 
                <Route path ="/" exact component = {ListEmployeeComponent}></Route>
                <Route path ="/employees" component = {ListEmployeeComponent}/>
                <Route path ="/add-employee" component = {CreateEmployeeComponent}/>
                <Route path ="/update-employee/:id" component ={UpdateEmployeeComponent}/>
                <Route path ="/view-employee/:id" component = {ViewEmployeecomponent}/>

              </Switch>
            </div>
            <FooterComponent/>
        
      </Router>
    </div>

  );
}

export default App;
