import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {amber, lightGreen} from "@mui/material/colors";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {VehicleInspection} from "../../../../../helpers/VehicleInspection.helper";


//ICONS
import VehicleWidthIcon from '../../../../../assets/icons/vehicleProfile/icons8-truck-width-50.png'
import VehicleHeightIcon from '../../../../../assets/icons/vehicleProfile/icons8-truck-height-50.png'
import VehicleLengthIcon from '../../../../../assets/icons/vehicleProfile/icons8-truck-length-50.png'
import PlateNumberIcon from "../../../../../assets/icons/vehicleProfile/icons8-licence-plate-50.png";

export const VehicleSizes = (props: any) => {
    const {vehicle} = props
    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: amber[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleWidthIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Szerokość</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.lastDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: amber[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleLengthIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Długość</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.nextDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: amber[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleHeightIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Wysokość</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}