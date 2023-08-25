import React, { useState } from 'react';
import { Typography, IconButton, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
import prevBtn from './../images/buttons/rightArrowBlueBtn.png';

function HelpPage() {
  const theme = useTheme();
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    <>
      <div style={{ padding: '10px', marginTop: '70px' }}>
        <Typography fontSize={'110%'}>
          מעבר בין המסכים השונים יתבצע דרך כפתור התפריט הממוקם בראש כל מסך מצד ימין.<br/>
          בכל שלב ניתן לעבור למסך אחר דרך כפתור זה.<br/><br/>
        </Typography>
      </div>
      <div style={{ padding: '40px' }}></div>
    </>,
    <>
      <div style={{ padding: '5px' }}>
        <Typography fontSize={'150%'} fontWeight="bold" color={theme.palette.darkBlue}>
          תרגול:
        </Typography>
        <Typography fontSize={'110%'}>
        על הילד לזהות ע"י שמיעה מילה אחת מבין שתי מילים, הנבדלות בתכונה אקוסטית אחת.<br/>
        </Typography>
        <div style={{ padding: '12px' }}>
          <Typography fontSize={'110%'}>
            בכניסה לעמוד יש לבחור את הגדרות התרגול הרצויות, לחיצה על כפתור החץ תציג את עמוד התרגול הנבחר.<br/>
            בכל פעם תוקרא מילה אחת משתי המילים שתמונתן תוצג על המסך.<br/>
            על הילד לבחור את התמונה הנכונה, פידבק מתאים יוצג בכל לחיצה.<br/>
            לחיצה על כפתורי החצים בתחתית העמוד תציג מילים ותמונות קודמות / חדשות על המסך.<br/>
            להשמעה חוזרת של המילה ניתן ללחוץ על הכפתור המתאים.
          </Typography>
        </div>
      </div>
      <div style={{ padding: '10.5px' }}></div>
    </>,
    <>
      <div style={{ padding: '5px' }}>
        <Typography fontSize={'150%'} fontWeight="bold" color={theme.palette.darkBlue}>
          משחקים:
        </Typography>
        <Typography fontSize={'110%'}>
          בעמוד המשחקים, לחיצה על המשחק הרצוי תפעיל אותו בעמוד חדש.
        </Typography>
      </div>
      <div style={{ padding: '88.5px' }}></div>
    </>,
  ];

  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      position: 'absolute',
      width: '100%',
      backgroundImage: `url(${PageBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: -1,
      direction: 'rtl',
    }}>
      <div className="board-container" style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        width: '90%', // Adjust the width of the container
        maxWidth: '1000px', // Set a maximum width
        maxHeight: '500px', 
        margin: '0 auto', // Center horizontally
        padding: '20px',
        backgroundImage: `url(${HelpBg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        textAlign: 'center', // Center align the text
      }}>
          <div className="board-container" style={{ 
            padding: '20px',
            maxHeight: '400px',
          }}>
            <Typography fontSize={'400%'} fontWeight="bold" color={theme.palette.darkBlue}>
              עזרה
            </Typography>
            {sections[currentSection]}
            <div style={{ display: 'flex',
                          justifyContent: 'center',
                          gap: '80px', // Adjust the gap between the buttons
                          position: 'relative',
                          //marginTop: '10%', //45
                          left: 0,
                          right: 0,
                          //padding: '250px'
                          }}>
              <IconButton onClick={goToPreviousSection}
                          disabled={currentSection === 0}
                          style={{
                            opacity: currentSection === 0 ? 0.7 : 1, // Adjust opacity for disabled state
                            pointerEvents: currentSection === 0 ? 'none' : 'auto', // Disable pointer events
              }}>
                <img src={prevBtn} style={{ width: '100%', height: '100%' }} alt="Previous" />
              </IconButton>
              <IconButton onClick={goToNextSection}
                          disabled={currentSection === sections.length - 1}
                          style={{
                            opacity: currentSection === sections.length - 1 ? 0.7 : 1, // Adjust opacity for disabled state
                            pointerEvents: currentSection === sections.length - 1 ? 'none' : 'auto', // Disable pointer events
              }}>
                <img src={nextBtn} style={{ width: '100%', height: '100%' }} alt="Next" />
              </IconButton>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HelpPage;

// ----------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// //import React, { useEffect, useState } from 'react';
// import { Typography, List, IconButton, Grid } from '@mui/material';
// import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
// import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
// import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
// import prevBtn from './../images/buttons/rightArrowBlueBtn.png';

// const helpSections = [
//     "מעבר בין המסכים השונים יתבצע דרך כפתור התפריט הממוקם בראש כל מסך מצד ימין.\n  בכל שלב ניתן לעבור למסך אחר דרך כפתור זה.  ",
//     "תרגול: על הילד לזהות...",
//     "בכניסה לעמוד יש לבחור...",
//   ];

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh', // This makes the container take up the full viewport height
//   backgroundImage: `url(${PageBg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// };

// // const contentContainerStyle = {
// //   background: `url(${HelpBg})`,
// //   backgroundSize: 'cover',
// //   backgroundPosition: 'center',
// //   padding: '20px',
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// // };

// const contentContainerStyle = {
//   background: `url(${HelpBg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: '20px',
//   width: '500px', // Set the desired fixed width for the content container
// };

// const titleStyle = {
//   fontSize: '24px',
//   marginTop: 0,
// };

// const textContainerStyle = {
//   //maxWidth: '80%', // Adjust the width as needed
//   textAlign: 'center',
// };

// const buttonContainerStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   width: '100%',
//   marginTop: '20px',
// };

// function HelpPage() {
//   const [currentSection, setCurrentSection] = useState(0);

//   const goToNextSection = () => {
//     if (currentSection < helpSections.length - 1) {
//       setCurrentSection(currentSection + 1);
//     }
//   };

//   const goToPreviousSection = () => {
//     if (currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     }
//   };

//   return (
//     // <div style={containerStyle}>
//     <div className="App" style={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center', 
//             height: '100vh',
//             position: 'absolute',
//             width: '100%',
//             backgroundImage: `url(${PageBg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             zIndex: -1,
//         }}>
//       {/* <div className="board-container" style={{ background: `url(${HelpBg})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: '20px',
//   // width: '600px',
//   // height: '300px',
//   // width: '100%',
//   // maxHeight: '100%',
//   }}> */}
//          {/* style={contentContainerStyle}> */}
//          <center>
//           {/* <img style={{ width: '80%', maxHeight: '100%', }} src={HelpBg}></img> */}
//             <div style={{ 
//               // display: 'flex', 
//               justifyContent: 'center', 
//               // alignItems: 'center', 
//               // height: '100vh',
//               // position: 'absolute',
//               width: '80%',
//               //maxHeight: '100%',
//               backgroundImage: `url(${HelpBg})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               // backgroundRepeat: 'no-repeat',
//               // zIndex: -1,
//             }}>
//             <h2 style={titleStyle}>Title</h2>
//             <div style={textContainerStyle}>
//               <p>{helpSections[currentSection]}</p>
//             </div>
//             {/* <div style={buttonContainerStyle}>
//               <button onClick={goToPreviousSection}>&lt; Back</button>
//               <button onClick={goToNextSection}>Next &gt;</button>
//             </div> */}
//             <Grid container justifyContent='center' style={{ textAlign: 'center', width: '50%', height: '20%' }}>
//               <Grid item xs={4}>
//                 <IconButton color="inherit" onClick={goToNextSection}>
//                   <img src={nextBtn} style={{ width: '100%', height: '100%' }} />
//                 </IconButton>
//               </Grid>
//               <Grid item xs={4}>
//                 <IconButton color="inherit" onClick={goToPreviousSection}>
//                   <img src={prevBtn} style={{ width: '100%', height: '100%' }} />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           </div>
//         </center>
//       </div>
//     // </div>
//   );
// }

// export default HelpPage;

// ----------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { IconButton, Grid } from '@mui/material';
// import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
// import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
// import nextBtn from './../images/buttons/leftArrowBlueBtn.png';
// import prevBtn from './../images/buttons/rightArrowBlueBtn.png';

// const helpSections = [
//     "מעבר בין המסכים השונים יתבצע דרך כפתור התפריט הממוקם בראש כל מסך מצד ימין.\n  בכל שלב ניתן לעבור למסך אחר דרך כפתור זה.  ",
//     "תרגול: על הילד לזהות...",
//     "בכניסה לעמוד יש לבחור...",
//   ];

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     position: 'absolute',
//     width: '100%',
//     backgroundImage: `url(${PageBg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     zIndex: -1,
//   };

//   const contentContainerStyle = {
//     width: '80%',
//     //maxWidth: '900px', // Set the maximum width for the content container
//     //margin: '0 auto', // Center the container horizontally
//     //padding: '20px',
//     //textAlign: 'center', // Center align the content
//     position: 'relative', // Allow positioning of the inner elements
//     backgroundImage: `url(${HelpBg})`,
//     height: '80%',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     //zIndex: -1,
//     //objectFit: 'cover',
//   };
  
//   const imageContainerStyle = {
//     position: 'relative', // Allow positioning within this container
//     width: '100%',
//     paddingTop: '25%', // 16:9 aspect ratio (adjust as needed)
//     overflow: 'hidden', // Hide any overflowing image content
//   };
  
//   const imageStyle = {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover', // Maintain image aspect ratio and cover the container
//   };
  
//   const titleStyle = {
//     fontSize: '24px',
//     marginTop: 0,
//   };
  
//   const textContainerStyle = {
//     zIndex: 1, // Place the text container above the image
//   };
  
//   const buttonContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '20px',
//     zIndex: 1, // Place the button container above the image
//   };

// function HelpPage() {
//   const [currentSection, setCurrentSection] = useState(0);

//   const goToNextSection = () => {
//     if (currentSection < helpSections.length - 1) {
//       setCurrentSection(currentSection + 1);
//     }
//   };

//   const goToPreviousSection = () => {
//     if (currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     }
//   };

//   return (
//     <div className="App" style={containerStyle}>
//       <div style={contentContainerStyle}>
//         <div style={imageContainerStyle}>
//           {/* <img src={HelpBg} alt="Help" style={imageStyle} /> */}
//           <h2 style={titleStyle}>Title</h2>
//           {helpSections[currentSection]}
//           <Grid container justifyContent='space-between' style={buttonContainerStyle}>
//             <Grid item xs={6}>
//               <IconButton color="inherit" onClick={goToNextSection}>
//                 <img src={nextBtn} style={{ width: '100%', height: '100%' }} alt="Next" />
//               </IconButton>
//             </Grid>
//             <Grid item xs={6}>
//               <IconButton color="inherit" onClick={goToPreviousSection}>
//                 <img src={prevBtn} style={{ width: '100%', height: '100%' }} alt="Previous" />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HelpPage;


// ----------------------------------------------------------------------------------------


// import React, { useEffect } from 'react';
// import { Typography, List } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import PageBg from './../images/pagesBg/skyAndCloudsBg.png';
// import HelpBg from './../images/pagesBg/helpBgWithoutText.png';
// import { makeStyles } from '@mui/styles';
// import hearMeOutIcon from './../images/kids/HEARMEOUT-Icon.png';
// const useStyles = makeStyles((theme) => ({
//   background: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundImage: `url(${PageBg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     zIndex: -1,
//   },
//   title: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     color: '#fff',
//     fontSize: 24,
//     zIndex: 1,
//   },
//   icon: {
//     position: 'absolute',
//     top: '6%',
//     left: '46%',
//     zIndex: 1,
//     height: '114px', 
//     width: '114px',
//   },
//   mainMenu: {
//     position: 'absolute',
//     width: '75%',
//     left: '50%',
//     top: '45%',
//     transform: 'translate(-50%, -50%)',
//     textAlign: 'right',
//   },
//   backgroundSquare: {
//     width: '100%',
//     maxHeight: '100%',
//   },
//   typography: {
//     position: 'absolute',
//     top: '21%',
//     left: '45%',
//     zIndex: 1,
   
//   },
// }));
// function HelpPage() {
//   const classes = useStyles();
//   const theme = useTheme();

//   useEffect(() => {
//     const handleResize = () => {
//       const title = document.getElementById('title');
//       const iconButton = document.getElementById('iconButton');
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={classes.background}>
//       <div className={classes.mainMenu}>
//         <center><img className={classes.backgroundSquare} src={HelpBg}></img></center>
//         <div className={classes.typography} >
//           <Typography fontSize={'250%'} fontWeight="bold" color={theme.palette.darkBlue}>
//             אודות
//           </Typography>
//           <Typography>
//             על האפליקציה:<br /><br />

//             רקע:<br /><br />

//             המפתחות:<br /><br />
//         </Typography>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HelpPage;