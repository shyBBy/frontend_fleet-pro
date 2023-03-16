import React from "react";
import {Grid, Paper, Stack, Typography} from "@mui/material";
import {BasicInfo} from "./BasicInfo/BasicInfo";
import {TechnicalData} from "./TechnicalData/TechnicalData";
import {VehicleProfileInterface} from 'types'
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/system";
import {deepOrange, grey} from "@mui/material/colors";


export const MainContent = (props: any) => {
    const {vehicle} = props

    return (
        <>
            <Grid item xs={12} md={7} lg={2.5}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Zdjęcie</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10%' }}>
                    <Avatar
                        src='https://revistacarro.com.br/wp-content/uploads/2022/01/renault-master-2023_1.jpg'
                        sx={{ width: 200, height: 200, border: `solid 4px`, borderColor: grey[300] }}
                        variant="rounded"
                    />
                    <Box p={1}>
                        <Stack direction={'row'}>
                            <Typography variant="body2" color="textSecondary" mr={1}>Oddział: </Typography>
                            <Typography variant="body2">{vehicle.placeName}</Typography>
                        </Stack>
                    </Box>
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