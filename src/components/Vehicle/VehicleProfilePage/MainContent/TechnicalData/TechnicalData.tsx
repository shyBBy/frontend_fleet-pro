import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {blueGrey, deepPurple, lightGreen} from "@mui/material/colors";
import {VehicleInspection} from "../../../../../helpers/VehicleInspection.helper";



//ICONS
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import Co2Icon from '@mui/icons-material/Co2';
import VehicleEngineIcon from "../../../../../assets/icons/vehicleProfile/icons8-engine-50.png";
import VehicleCapacityIcon from '../../../../../assets/icons/vehicleProfile/icons8-truck-weight-max-loading-50.png'
import VehicleAxelIcon from '../../../../../assets/icons/vehicleProfile/icons8-4wd-50.png'
import VehicleWeightIcon from '../../../../../assets/icons/vehicleProfile/icons8-weight-kg-50.png'
import VehicleTrailerIcon from '../../../../../assets/icons/vehicleProfile/icons8-trailer-50.png'
import VehicleTruckWidthIcon from '../../../../../assets/icons/vehicleProfile/icons8-truck-width-50.png'
import VehicleFuelUsageIcon from '../../../../../assets/icons/vehicleProfile/icons8-full-tank-50.png'




export const TechnicalData = (props: any) => {
    const {vehicle} = props
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleEngineIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Pojemność silnika</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.lastDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleEngineIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Moc silnika</Typography>
                            <Typography>{VehicleInspection.convertToOnlyDate(vehicle.nextDateOfVehicleInspection)}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><LocalGasStationIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Paliwo</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><LocalGasStationIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Paliwo alternatywne</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><Co2Icon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Emisja CO₂</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleFuelUsageIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Średnie zużycie paliwa na 100km</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><AirlineSeatReclineExtraIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Liczba miejsc ogółem</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><AirlineSeatReclineExtraIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Liczba miejsc siedzących</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleWeightIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Masa własna pojazdu</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleTrailerIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Maks. masa całkowita ciągniętej przyczepy z hamulcem</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleTrailerIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Maks. masa całkowita ciągniętej przyczepy bez hamulca</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCapacityIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Dopuszczalna ładowność</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCapacityIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Dopuszczalna masa całkowita</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleAxelIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Liczba osi</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleAxelIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Rozstaw osi</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleTruckWidthIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Rozstaw kół (średni)</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><DirectionsCarIcon/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Maksymalny nacisk na oś</Typography>
                            <Typography>{VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)? 'Aktualny' : 'Brak przeglądu'}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}