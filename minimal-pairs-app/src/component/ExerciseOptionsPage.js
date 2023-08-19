import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { SettingDropDown } from './SettingDropDown';
import optionsWhiteBg from './../images/pagesBg/exerciseSettingsWhiteRectangle.png';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import leftArrowBtn from './../images/buttons/leftArrowBtn.png';
import InfoDialog from './InfoDialog';
import { manWomanOptions, options, placeInWordOp, voiceOptions } from './utils/options';

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


function ExerciseOptionsPage() {
    const classes = useStyles();
    const theme = useTheme();

    //---------------NAVIGATE-------------------
    const navigate = useNavigate();
    const navigateExercise = () => {
        navigate('/ExercisePage', {
            state: {
                category: category.label,
                letters: letters.label,
                placeInWord: placeInWord.label,
                voice: voice.label
            }
        });
    };

    //---------------HANDLERS-------------------
    const [category, setCategory] = useState(options[0]);
    const [letters, setLetteres] = useState(options[0].letterOptions[0]);
    const [placeInWord, setPlaceInWord] = useState(placeInWordOp.all);
    const [voice, setVoice] = useState(voiceOptions.man);

    const handleChangeCategory = (value) => {
        setCategory(value);
        setLetteres(value.letterOptions[0]);
        setPlaceInWord(placeInWordOp.all);
    };

    const handleChangelLetters = (value) => {
        setLetteres(value);
        setPlaceInWord(placeInWordOp.all);
    };

    return (
        <div className={classes.background} align="center">
            <img src={optionsWhiteBg} className={classes.optionBg} alt="optionsWhiteBg" />
            <div id="select" className={classes.select}>
                <SettingDropDown title={<><InfoDialog />סוג תרגול</>} value={category} options={options} updateState={handleChangeCategory} />
                <SettingDropDown title="אותיות" options={category.letterOptions} value={letters} updateState={handleChangelLetters} />
                <SettingDropDown title="סדר הופעת מילים" options={letters.placeInWordOptions} value={placeInWord} updateState={setPlaceInWord} />
                <SettingDropDown title="קול" value={voice} options={manWomanOptions} updateState={setVoice} />
            </div>
            <div className={classes.iconButton} align="center"
                style={{ position: 'absolute', top: '27%', left: '15%', zIndex: 1 }}>
                <Typography fontSize={'600%'} fontWeight="bold" color={theme.palette.darkBlue}>
                    התחלת
                </Typography>
                <Typography style={{ marginTop: '-15%' }} fontSize={'600%'} fontWeight="bold" color={theme.palette.redOrange}>
                    תרגול
                </Typography>
                <div className={classes.iconButton} align="center"
                >
                    <IconButton color="inherit" onClick={navigateExercise} >
                        <img src={leftArrowBtn} alt='leftArrowBtn'></img>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default ExerciseOptionsPage;