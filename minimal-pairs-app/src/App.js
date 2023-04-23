import * as React from 'react';
import Button from '@mui/material/Button';
import Train from './images/train.jpeg';
import Rakefet from './images/rakefet.jpeg';
import { Container, Grid } from '@mui/material';

export default function MyApp() {
  return (
    <Container maxWidth="sm">

      <div className='App'>

        <header className="App-header">Welcome</header>
        <body>
          <Button variant="contained">Hello World 2</Button>

          <Grid container spacing={8} justify={"center"} >


            <Grid item ><img src={Train} border="1" justify={"center"} alt="cur" /></Grid>

            <Grid item  ><img src={Rakefet} border="1" justify={"center"} alt="cur" /></Grid>
          </Grid>
        </body>
      </div>

    </Container>
  );
}

