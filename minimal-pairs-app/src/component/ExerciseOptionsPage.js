
// 2ND ATTEMPT
import React, { useState, useEffect, Component } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Select, NativeSelect, FormControl, InputLabel, FormControlLabel } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone

import exerciseOptionsPage from './../images/pagesBg/exerciseSettingsPage.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
    },
    background: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${exerciseOptionsPage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
    },
    title: {
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#fff',
        fontSize: 24,
        zIndex: 1,
    },
    iconButton: {
        position: 'absolute',
        top: '80%',
        left: '15%',
        zIndex: 1,
    },
    select: {
        position: 'absolute',
        top: '6%',
        left: '56%',
        zIndex: 4,
    },
}));

function GamesOptionsPage() {  // START OF THE RUN
    const classes = useStyles();

    useEffect(() => {
        const handleResize = () => {
            // Adjust the positions of the title and button when the window is resized
            const title = document.getElementById('title');
            const iconButton = document.getElementById('iconButton');
            // Set the positions based on the new window dimensions
            // title.style.top = '20px';
            // title.style.left = '20px';
        };
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    //---------------NAVIGATE-------------------
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };
    const navigateGames = () => {
        navigate('/GamesOptionsPage');
    };
    const navigateExercise = () => {
        navigate('/ExercisePage');
    };
    //---------------HANDLERS-------------------

    const [soundAnchorEl, setSoundAnchorEl] = useState(null); // -----------------------------
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [lettersChoice, setLettersChoice] = useState(null);
    //const [graphicsQuality, setGraphicsQuality] = useState('medium');
    //const [language, setLanguage] = useState('en');

    const handleSoundClick = (event) => {
        setSoundAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleSoundClose = () => {
        setSoundAnchorEl(null);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const handleLetterChoice = (event) => {
        setLettersChoice(event.target.value);
    };

    const options = ["ב-ק", "ת-ק", "ק-מ"];

    return (
        <div id="container" className={classes.container}>
            <div id="background" className={classes.background}>
                <div className={classes.background} align="center">
                    <Toolbar style={{ justifyContent: 'flex-end' }} variant="dense">
                        <IconButton style={{ color: "inherit", margin: 'initial', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleMenuClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchorEl}
                            open={Boolean(menuAnchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={navigateHome} >Home</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Exercise</MenuItem>
                            <MenuItem onClick={navigateGames}>Games</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
                        </Menu>
                    </Toolbar>
                    {/* <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
                    <div>
                        <div id="select" className={classes.select}>
                            <FormControl>
                                < InputLabel variant="standard" style={{
                                    zIndex: 1, color: 'white',
                                    width: '100%',
                                    zIndex: 1,
                                    pointerEvents: 'none',
                                    transformOrigin: 'top right',
                                }} id="demo-simple-select-label">אותיות</InputLabel>
                                <Select
                                    sx={{
                                        boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, "& .MuiSvgIcon-root": {
                                            right: "unset",
                                            left: "7px",
                                        }
                                    }}
                                    value={lettersChoice}
                                    onChange={handleLetterChoice}
                                    IconComponent={(props) => (
                                        <ArrowDropDownIcon {...props} style={{ fontSize: '60px', color: 'white' }} />
                                    )}
                                    style={{
                                        backgroundColor: 'rgb(0 160 135)',
                                        color: 'white',
                                        width: '301px',
                                        borderRadius: '50px',
                                    }}
                                >
                                    {options.map((option) => <MenuItem style={{ justifyContent: 'center' }} value={option}>{option}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </div>
                        <div id="iconButton" className={classes.background}>
                            <div className={classes.iconButton} align="center">
                                <IconButton color="inherit" onClick={navigateExercise} >
                                    <Next /> start exercise
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GamesOptionsPage;