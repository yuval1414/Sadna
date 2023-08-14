
// 2ND ATTEMPT
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, MenuItem, Select, FormControl, InputLabel, Typography as MuiTypography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import { makeStyles } from '@mui/styles';
import { SettingDropDown } from './SettingDropDown';
import optionsWhiteBg from './../images/pagesBg/exerciseSettingsWhiteRectangle.png';
import exerciseOptionsPage from './../images/pagesBg/exerciseSettingsPage.png';
import leftArrowBtn from './../images/buttons/leftArrowBtn.png';
import InfoIcon from '@mui/icons-material/Info';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
    },
    background: {
        position: 'fixed',
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
        top: '65px',
        paddingRight: '148px',
        right: '0px',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    typography: {
        fontSize: 'xx-large', fontWeight: 'bold', color: 'coral',
        alignItems: 'flex-end', justifyContent: 'flex-end',
        paddingTop: '20px',
    },
    optionBg: {
        height: '550px',
        width: '500px',
        display: 'flex',
        paddingRight: '100px',
        top:'55px',
        position: 'absolute',
        right: '0px',
    },
    optionsWrapper: {
        position: 'relative',
    }
}));

function ExerciseOptionsPage() {  // START OF THE RUN
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

    const excInfoPageHandler= (event) => {
        //open or close the 'info excercise page';
        console.log("open or close the 'info excercise page'");
    };

    const category = ["מקום חיתוך", "אופן חיתוך", "קוליות"];
    const letters = ["ב-ק", "ת-ק", "ק-מ", "הכל"];
    const order = ["רגיל", "רנדומלי"];
    const voice = ["גבר", "אישה"];

    return (
        <div id="container" className={classes.container}>
            <div id="background" className={classes.background}>
                <div className={classes.background} align="center">
                    <div className={classes.optionsWrapper}>
                        <img src={optionsWhiteBg} className={classes.optionBg} />
                        <div id="select" className={classes.select}>
                            <MuiTypography className={classes.typography} > <InfoIcon style={{color: 'black', cursor: 'pointer'}} onClick={excInfoPageHandler} />   סוג תרגול</MuiTypography>
                            <SettingDropDown title="סוג תרגול" options={category} />
                            <MuiTypography className={classes.typography} >אותיות</MuiTypography>
                            <SettingDropDown title="אותיות" options={letters} />
                            <MuiTypography className={classes.typography} >קול</MuiTypography>
                            <SettingDropDown title="קול" options={voice} />
                            <MuiTypography className={classes.typography} >סדר הופעת מילים</MuiTypography>
                            <SettingDropDown title="סדר הופעת מילים" options={order} />
                        </div>
                    </div>
                    <div id="iconButton">
                        <div className={classes.iconButton} align="center"
                            style={{ position: 'absolute', top: '75%', left: '20%', zIndex: 1 }}>
                            <IconButton color="inherit" onClick={navigateExercise} >
                                <img src={leftArrowBtn}></img>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ExerciseOptionsPage;