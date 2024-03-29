import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {lightGreen} from "@mui/material/colors";
import {TechnicalDataInterface} from 'types'


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


interface PropsInterface {
    data: TechnicalDataInterface[]
}


export const TechnicalData = (props: PropsInterface) => {


    const {data} = props

    const technicalData = data[0]


    if (data.length === 0) {
        return <Typography variant="subtitle2" color="textSecondary">Brak technicznych danych pojazdu, proszę uzupełnij
            je.</Typography>
    }


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
                            <Typography>{technicalData.engineCapacity} cm³</Typography>
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
                            <Typography>{technicalData.enginePower} kW</Typography>
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
                            <Typography>{technicalData.fuel}</Typography>
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
                            <Typography>{technicalData.alternativeFuel}</Typography>
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
                            <Typography>{technicalData.CO2Emission} g/km</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleFuelUsageIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Średnie zużycie paliwa na
                                100km</Typography>
                            <Typography>{technicalData.avgFuelConsumption} L</Typography>
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
                            <Typography>{technicalData.totalSeats}</Typography>
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
                            <Typography>{technicalData.seatedSeats}</Typography>
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
                            <Typography>{technicalData.vehicleWeight} kg</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleTrailerIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Maks. masa całkowita ciągniętej
                                przyczepy z hamulcem</Typography>
                            <Typography>{technicalData.maxTrailerWeightWithBrakes} kg</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleTrailerIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Maks. masa całkowita ciągniętej
                                przyczepy bez hamulca</Typography>
                            <Typography>{technicalData.maxTrailerWeightWithoutBrakes} kg</Typography>
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
                            <Typography>{technicalData.payload} kg </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: lightGreen[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCapacityIcon}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Dopuszczalna masa
                                całkowita</Typography>
                            <Typography>{technicalData.grossWeight} kg</Typography>
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
                            <Typography>{technicalData.numberOfAxles}</Typography>
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
                            <Typography>{technicalData.axleSpacing} mm</Typography>
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
                            <Typography>{technicalData.wheelSpacing} mm </Typography>
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
                            <Typography>{technicalData.maxAxleLoad} kN</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}