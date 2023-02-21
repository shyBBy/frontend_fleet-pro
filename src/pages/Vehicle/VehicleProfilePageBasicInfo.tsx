import React from 'react'
import {Avatar, Grid, Paper, Typography} from "@mui/material";
import {HeaderContainer} from "../../components/Vehicle/VehicleProfilePage/Header/HeaderContainer";
import {Changelog} from "../../components/Dashboard/Changelog/Changelog";
import {MainCard} from "../../components/MainCard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import CarCrashIcon from "@mui/icons-material/CarCrash";


export const VehicleProfilePageBasicInfo = (props: any) => {
  
  const {vehicle} = props;
  
  return(
    <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <MainCard title={''} count={vehicle.registerNumber} description={'Numer rejestracyjny'} icon={<DirectionsCarIcon style={{color: 'black'}}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <MainCard title={''} count={vehicle.name} description={'Marka'} icon={<ApartmentIcon style={{color: 'black'}}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <MainCard title={''} count={vehicle.model} description={'Model'} chipColor={`rgb(250, 173, 20)`} icon={<DepartureBoardIcon style={{color: 'white'}}/>}/>
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            <Grid item xs={12} md={7} lg={4}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={vehicle.photo}
                        sx={{ width: 150, height: 150 }}
                        variant="square"
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                </Paper>
            </Grid>

        </Grid>
    </>
    )
}