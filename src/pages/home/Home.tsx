import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        
            <Grid container direction="row" className="bg-home" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f5f5f5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#f5f5f5", color: "black" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src/assets/img/mamaco.png" className="img"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "black" }}>
                </Grid>
            </Grid>
        
    );
}

export default Home;