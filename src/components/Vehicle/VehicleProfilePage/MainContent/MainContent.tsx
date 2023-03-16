import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import {BasicInfo} from "./BasicInfo/BasicInfo";
import {TechnicalData} from "./TechnicalData/TechnicalData";
import {VehicleProfileInterface} from 'types'
import Avatar from "@mui/material/Avatar";


export const MainContent = (props: any) => {
    const {vehicle} = props

    return (
        <>
            <Grid item xs={12} md={7} lg={3}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Zdjęcie</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Avatar>d</Avatar>
                </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={9}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Podstawowe infmormacje o pojeździe</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <BasicInfo vehicle={vehicle}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={6}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Dane techniczne</Typography>
                    </Grid>
                </Grid>
                <Paper>
                    <TechnicalData vehicle={vehicle}/>
                </Paper>
            </Grid>
        </>
    )
}