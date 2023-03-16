import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";


//ICONS

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PinIcon from '@mui/icons-material/Pin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import ShieldIcon from '@mui/icons-material/Shield';
import AddRoadIcon from '@mui/icons-material/AddRoad';

export const BasicInfo = (props: any) => {
    const {vehicle} = props
    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><DirectionsCarIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Marka</Typography>
                            <Typography>{vehicle.name}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><DirectionsCarIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Model</Typography>
                            <Typography>{vehicle.model}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><PinIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Numer rejestracyjny</Typography>
                            <Typography>{vehicle.registerNumber}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><CalendarMonthIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Rok produkcji</Typography>
                            <Typography>{vehicle.yearOfProduction}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><CalendarMonthIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Data pierwszej rejestracji</Typography>
                            <Typography>{vehicle.firstRegistrationDate}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><DeviceUnknownIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Typ pojazdu</Typography>
                            <Typography>{vehicle.vehicleType}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><PinIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Numer VIN</Typography>
                            <Typography>{vehicle.vinNumber}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><ShieldIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Numer Polisy</Typography>
                            <Typography>{vehicle.policyNumber}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                            <Icon><AddRoadIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Przejechane kilometry</Typography>
                            <Typography>{vehicle.vehicleMileage}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}