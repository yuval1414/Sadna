import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';
function Home() {
    return (
        <div>
            Welcome to the Home Page!
            <nav>
          <ul>
           
            <Button href="/" variant="contained">Home</Button>
           
            <Button href="/exercisePage" variant="contained">exercisePage</Button>
            
            
          </ul>
        </nav>

        </div>
    )
}

export default Home;