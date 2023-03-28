import React from "react";
import {Grid} from "@mui/material";
import {MainCard} from "../../../MainCard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AbcIcon from "@mui/icons-material/Abc";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import {VehicleInspection} from "../../../../helpers/VehicleInspection.helper";
import PlateNumberIcon from "../../../../assets/icons/vehicleProfile/icons8-licence-plate-50.png";
import {deepPurple, lightBlue, yellow} from "@mui/material/colors";

export const Header = (props: any) => {
    const {vehicle} = props

    const inspectionStatus = VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Marka'} count={vehicle.name}
                          chipColor={yellow[600]}
                          description={'Marka pojazdu.'}
                          icon={<DirectionsCarIcon style={{color: 'white'}}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Model'} count={vehicle.model}
                          chipColor={deepPurple[500]}
                          description={'Model pojazdu.'}
                          icon={<ApartmentIcon style={{color: 'white'}}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Numer rejestracyjny'} count={vehicle.registerNumber}
                          description={'Numer rejestracyjny pojazdu.'}
                          chipColor={lightBlue[500]}
                          icon={<img style={{height: '140%'}} src={PlateNumberIcon}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Przegląd'} count={inspectionStatus ? 'Aktualny' : "Brak przeglądu"}
                          description={'Badanie techniczne pojazdu.'}
                          chipColor={inspectionStatus ? `rgb(25, 159, 65)` : `rgb(217, 23, 23)`}
                          icon={inspectionStatus ? <NoCrashIcon style={{color: 'white'}}/> :
                              <CarCrashIcon style={{color: 'white'}}/>}/>
            </Grid>
        </>
    );
}