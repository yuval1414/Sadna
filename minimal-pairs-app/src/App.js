
// 2ND ATTEMPT
import './App.css';
import React, { useState } from 'react';
//import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
//import VolumeUp from '@mui/icons-material/VolumeUp';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
//import Replay from '@mui/icons-material/ReplayRounded';
//import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import ExercisePage from './component/ExercisePage';
import Home from './component/Home';
//import Contact from './component/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/ExercisePage" element={<ExercisePage/>} >
          </Route>
          {/* <Route path="/contact" component={contact}>
          </Route> */}
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;