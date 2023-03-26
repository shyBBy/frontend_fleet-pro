import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {deepOrange, lightGreen, red} from "@mui/material/colors";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {VehicleInspection} from "../../../../../helpers/VehicleInspection.helper";


import VehicleInspectionIcon from "../../../../../assets/icons/vehicleProfile/icons8-driving-guidelines-50.png";

export const VehicleInspectionData = (props: any) => {


    const {vehicle} = props
    const validInspection = VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)
    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: deepOrange[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleInspectionIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Data ostatniego przeglądu</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.lastDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: deepOrange[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleInspectionIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Data następnego przeglądu</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.nextDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: validInspection? deepOrange[500] : red[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleInspectionIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Przegląd</Typography>
                            <Typography>{validInspection? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}