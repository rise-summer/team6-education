import React from 'react';
import './App.css';
import StudentAssignments from './Classes/StudentAssignments';
import Assignment from './Classes/Assignment';
import ClassPage from './Classes/ClassPage';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/StudentAssignments" component={StudentAssignments}/>
        <Route exact path="/Assignment" component={Assignment}/>
        <Route exact path="/ClassPage" component={ClassPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
