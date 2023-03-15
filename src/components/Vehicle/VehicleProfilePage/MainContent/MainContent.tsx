import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import {BasicInfo} from "./BasicInfo/BasicInfo";
import {TechnicalData} from "./TechnicalData/TechnicalData";


export const MainContent = () => {
    return (
        <>
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Podstawowe infmormacje o pojeździe</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <BasicInfo/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Dane techniczne</Typography>
                    </Grid>
                </Grid>
                <Paper>
                    <TechnicalData/>
                </Paper>
            </Grid>
        </>
    )
}