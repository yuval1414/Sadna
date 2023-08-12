
// 2ND ATTEMPT
import React, { useState, useEffect, Component } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Select, NativeSelect, FormControl, InputLabel, FormControlLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import { makeStyles } from '@mui/styles';

import exerciseOptionsPage from './../images/pagesBg/exerciseSettingsPage.png';
import leftArrowBtn from './../images/buttons/leftArrowBtn.png';

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
    const theme = useTheme();

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
    const navigateExercise = () => {
        navigate('/ExercisePage');
    };

    //---------------HANDLERS-------------------

    const [lettersChoice, setLettersChoice] = useState(null);
    //const [graphicsQuality, setGraphicsQuality] = useState('medium');
    //const [language, setLanguage] = useState('en');

    const handleLetterChoice = (event) => {
        setLettersChoice(event.target.value);
    };

    const options = ["ב-ק", "ת-ק", "ק-מ"];

    return (
        <div id="container" className={classes.container}>
            <div id="background" className={classes.background}>
                <div className={classes.background} align="center">
                    {/* <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
                    <div>
                        <div id="select" className={classes.select}>
                            <FormControl>
                                < InputLabel variant="standard" style={{
                                    zIndex: 1, color: theme.palette.white,
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
                                        <ArrowDropDownIcon {...props} style={{ fontSize: '50px', color: theme.palette.white }} />
                                    )}
                                    style={{
                                        backgroundColor: theme.palette.green,
                                        color: theme.palette.white,
                                        width: '301px',
                                        borderRadius: '50px',
                                    }}
                                >
                                    {options.map((option) => <MenuItem style={{ justifyContent: 'center' }} value={option}>{option}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </div>
                        <div id="iconButton" className={classes.background}>
                            <div className={classes.iconButton} align="center" 
                            style={{position: 'absolute', top: '75%', left: '20%', zIndex: 1}}>
                                <IconButton color="inherit" onClick={navigateExercise} >
                                    <img src={leftArrowBtn}></img>
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