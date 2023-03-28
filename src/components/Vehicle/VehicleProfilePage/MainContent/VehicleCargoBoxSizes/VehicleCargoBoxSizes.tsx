import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {blue, lightBlue, lightGreen} from "@mui/material/colors";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {VehicleInspection} from "../../../../../helpers/VehicleInspection.helper";

//ICONS

import VehicleCargoSize from '../../../../../assets/icons/vehicleProfile/icons8-surface-50.png'


export const VehicleCargoBoxSizes = (props: any) => {
    const {vehicle} = props
    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: blue[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCargoSize}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Szerokość kipy</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.lastDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: blue[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCargoSize}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Długość kipy</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.nextDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: blue[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCargoSize}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Wysokość kipy</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}