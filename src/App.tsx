import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MainLayout} from "./layouts/MainLayout";
import {Grid, Paper} from "@mui/material";

function App() {
  return (
    <>
    <MainLayout>
      <>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
          >
            <p>KARTA JAKAS TAM 1</p>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
          >
            <p>KARTA JAKAS TAM 2 </p>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <p>KARTA JAKAS TAM 3</p>
          </Paper>
        </Grid>
      </>
    </MainLayout>
    </>
  );
}

export default App;
