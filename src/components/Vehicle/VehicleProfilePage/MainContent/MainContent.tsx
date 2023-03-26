import React from "react";
import {Grid, Paper, Stack, Typography} from "@mui/material";
import {BasicInfo} from "./BasicInfo/BasicInfo";
import {TechnicalData} from "./TechnicalData/TechnicalData";
import {VehicleProfileInterface} from 'types'
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/system";
import {deepOrange, green, grey} from "@mui/material/colors";
import BuildIcon from '@mui/icons-material/Build';
import {VehicleInspectionData} from "./VehicleInspectionData/VehicleInspectionData";
import {Changelog} from "../../../Dashboard/Changelog/Changelog";
import {VehicleCargoBoxSizes} from "./VehicleCargoBoxSizes/VehicleCargoBoxSizes";
import {VehicleSizes} from "./VehicleSizes/VehicleSizes";
import {Link} from "react-router-dom";


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
                        <a href={'https://historiapojazdu.gov.pl'}><Typography variant="body2" color="textSecondary" mr={1}>Sprawdź pojazd w CEPIKU</Typography></a>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={9} mt={5}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Podstawowe infmormacje o pojeździe</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column',}}>
                    <BasicInfo vehicle={vehicle}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Techniczne informacje o pojeździe</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <TechnicalData vehicle={vehicle}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={5} mt={8}>
                <Grid item xs={12} md={5} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="overline">Informacje dotyczące przeglądu pojazdu</Typography>
                        </Grid>
                    </Grid>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <VehicleInspectionData vehicle={vehicle}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="overline">Wymiary pojazdu</Typography>
                        </Grid>
                    </Grid>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <VehicleSizes vehicle={vehicle}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="overline">Wymiary kipy ładunkowej</Typography>
                        </Grid>
                    </Grid>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <VehicleCargoBoxSizes vehicle={vehicle}/>
                    </Paper>
                </Grid>

            </Grid>
            <Grid item xs={12} md={5} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Historia serwisowa</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Changelog/>
                </Paper>
            </Grid>
        </>
    )
}