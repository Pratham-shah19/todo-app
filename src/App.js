import React,{useEffect, useState} from 'react';
import Today from './Today';
import Sidebar from './Sidebar';
import Profile from './Profile';
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="App">
      
          {!user ?<Login/>:(
                (
                  <div className="app_body">
                      <Sidebar/>
                      <Today/>
                      <Profile/>
                  </div>

                )
              
              )
          }
          
      
    </div>
  );
}

export default App;
