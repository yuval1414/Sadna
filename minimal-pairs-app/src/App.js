
// 2ND ATTEMPT
import './App.css';
import React, { useState } from 'react';
//import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
//import VolumeUp from '@mui/icons-material/VolumeUp';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { Menu as MenuIcon, VolumeUp } from '@material-ui/icons';
//import Replay from '@mui/icons-material/ReplayRounded';
//import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import Home from './component/Home';
import ExercisePage from './component/ExercisePage';
import GamesOptionsPage from './component/GamesOptionsPage';
import ExerciseOptionsPage from './component/ExerciseOptionsPage';
import HelpPage from './component/HelpPage';
import AboutPage from './component/AboutPage';
import GamePage from './component/Games/GamePage';
import TicTacToeGame from './component/Games/TicTacToe/Game';
import Toolbar from './component/Toolbar';
//import Contact from './component/Contact';

//mine:
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
//import './fonts/Assistant-Regular.ttf';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Toolbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ExerciseOptionsPage" element={<ExerciseOptionsPage />} />
          <Route path="/ExercisePage" element={<ExercisePage />} />
          <Route path="/GamesOptionsPage" element={<GamesOptionsPage />} />
          <Route path="/HelpPage" element={<HelpPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/GamePage" element={<GamePage />} />
          <Route path="/TicTacToeGame" element={<TicTacToeGame />} />
        </Routes>
      </Router>
    </ThemeProvider>
    // const pagesWithRamkol = [1,2,3]
    // const isPageRamkol = () => {
    //   return [1,2,3].includes(currentPage)
    // }
    // <menu></menu>
    // {isPageRamkol && (
    //   <ramkol></ramkol>
    //   )}
  );
}

