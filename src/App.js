import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';





function App() {
 const [{user}, dispatch] = useStateValue();
  return (

  <div className="app">
    {!user ? (
    <Login/>
    ) : (
      <div className="app_body">
         
              
      <Router>
      <Sidebar/>
        <Switch>
       
          <Route path="/rooms/:roomId">

            <Chat/>

          </Route>
        </Switch>

      </Router>




</div>

    )}
   
   
  </div>

  );
}

export default App;
