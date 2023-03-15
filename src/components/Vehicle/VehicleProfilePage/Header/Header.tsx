import React from "react";
import {Grid} from "@mui/material";
import {MainCard} from "../../../MainCard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AbcIcon from "@mui/icons-material/Abc";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import {VehicleInspection} from "../../../../helpers/VehicleInspection.helper";

export const Header = (props: any) => {
    const {vehicle} = props

    const inspectionStatus = VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Marka'} count={vehicle.name} description={'Marka pojazdu.'}
                          icon={<DirectionsCarIcon style={{color: 'black'}}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Model'} count={vehicle.model}
                          description={'Model pojazdu.'}
                          icon={<ApartmentIcon style={{color: 'black'}}/>}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <MainCard title={'Numer rejestracyjny'} count={vehicle.registerNumber}
                          description={'Numer rejestracyjny pojazdu.'}
                          icon={<AbcIcon style={{color: 'black'}}/>}/>
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