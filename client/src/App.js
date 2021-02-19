import React, { Fragment } from 'react';
import './App.css';

//components

import Tabs from "./components/Tabs"; 
import InputInterceptDataloadRule from "./components/InputInterceptDataloadRule";
import ListInterceptDataloadRule from "./components/ListInterceptDataloadRule";
import ListAlertGroupTeamUsers from './components/ListAlertGroupTeamUsers';
import InputAlertGroupTeamUsers from './components/InputAlertGroupTeamUsers';
import InputRuleActions from './components/InputRuleActions';
import ListRuleActions from './components/ListRuleActions';
import ListInterceptDataloadDetails from './components/ListInterceptDataloadDetails';

//editors
import Continer from '@material-ui/core/Container';

function App() {
  return (
    <Continer maxWidth="fixed" className="box">
        <div>
          <h1 class="title">Rules Maintenance</h1>
          <Tabs>
            <div label="Intercept Dataload">
              <InputInterceptDataloadRule />  
              <ListInterceptDataloadRule />
            </div>
            <div label="Alert">
              <InputAlertGroupTeamUsers />
              <ListAlertGroupTeamUsers />
            </div>
            <div label="Rule Actions">
              <InputRuleActions />
              <ListRuleActions />
            </div>
            <div label="Test">
              <ListInterceptDataloadDetails />
            </div>
          </Tabs>    
        </div>  
      </Continer>   
  );
}

export default App;
