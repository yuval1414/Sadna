
// 2ND ATTEMPT
import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, MenuItem, Select, FormControl, InputLabel, Typography as MuiTypography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Next from '@mui/icons-material/ArrowBackTwoTone'; // ArrowBackIosTwoTone // ArrowBackTwoTone
import { makeStyles } from '@mui/styles';
import { SettingDropDown } from './SettingDropDown';
import optionsWhiteBg from './../images/pagesBg/exerciseSettingsWhiteRectangle.png';
import exerciseOptionsPage from './../images/pagesBg/exerciseSettingsPage.png';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import leftArrowBtn from './../images/buttons/leftArrowBtn.png';
import InfoIcon from '@mui/icons-material/Info';
import InfoDialog from './InfoDialog';

const useStyles = makeStyles((theme) => ({
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${PageBg})`,
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
        top: '230px',
        left: '27%',
        zIndex: 1,
    },
    select: {
        position: 'absolute',
        top: '7%',
        paddingRight: '148px',
        right: '10%',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        align: 'center',
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
        top: '7%',
        position: 'absolute',
        right: '10%',
    },
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

    const excInfoPageHandler = (event) => {
        //open or close the 'info excercise page';
        console.log("open or close the 'info excercise page'");
    };

    const category = ["מקום חיתוך", "אופן חיתוך", "קוליות"];
    const letters = ["ב-ק", "ת-ק", "ק-מ", "הכל"];
    const order = ["רגיל", "רנדומלי"];
    const voice = ["גבר", "אישה"];

    return (
        <body>
            <div className={classes.background} align="center">
                <img src={optionsWhiteBg} className={classes.optionBg} />
                <div id="select" className={classes.select}>
                    <MuiTypography className={classes.typography} > 
                    <InfoDialog> <InfoIcon style={{ color: theme.palette.darkBlue, cursor: 'pointer' }} />  </InfoDialog>
                        סוג תרגול</MuiTypography>
                    <SettingDropDown title="סוג תרגול" options={category} />
                    <MuiTypography className={classes.typography} >אותיות</MuiTypography>
                    <SettingDropDown title="אותיות" options={letters} />
                    <MuiTypography className={classes.typography} >קול</MuiTypography>
                    <SettingDropDown title="קול" options={voice} />
                    <MuiTypography className={classes.typography} >סדר הופעת מילים</MuiTypography>
                    <SettingDropDown title="סדר הופעת מילים" options={order} />
                </div>
                <div className={classes.iconButton} align="center"
                    style={{ position: 'absolute', top: '27%', left: '15%', zIndex: 1 }}>
                    <Typography fontSize={'600%'} fontWeight="bold" color={theme.palette.darkBlue}>
                        הגדרות
                    </Typography>
                    <Typography style={{ marginTop: '-15%' }} fontSize={'600%'} fontWeight="bold" color={theme.palette.redOrange}>
                        תרגול
                    </Typography>
                    <div className={classes.iconButton} align="center"
                    >
                        <IconButton color="inherit" onClick={navigateExercise} >
                            <img src={leftArrowBtn}></img>
                        </IconButton>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ExerciseOptionsPage;