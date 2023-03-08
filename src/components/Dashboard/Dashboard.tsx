import React, {useState, useEffect} from "react";
import {
    Grid,
    Paper,
    Typography
} from "@mui/material";
import {MainCard} from "../MainCard";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import {DashboardLastDriver} from "./DashboardLastDriver/DashboardLastDriver";
import {Changelog} from "./Changelog/Changelog";
import {DashboardLastVehicles} from "./DashboardLastVehicles/DashboardLastVehicles";
import {GetListOfVehiclesResponse} from 'types'
import {VehicleInspection} from "../../helpers/VehicleInspection.helper";
import { config } from "src/config/config";


// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};


export const Dashboard = () => {

    const [vehiclesWithoutInspection, setVehicleWithoutInspection] = useState(0)
    const [vehiclesDueForInspection, setVehiclesDueForInspection] = useState(0)
    const [vehiclesList, setVehiclesList] = useState<GetListOfVehiclesResponse>([])


  
      useEffect(() => {
        (async () => {
          const res = await fetch(`${config.API_URL}vehicle/list?page=1`, {
                credentials: 'include',
            })
            const data = await res.json()
            setVehiclesList(data.vehicles)
        })();
      }, []);

    useEffect(() => {
        ( () => {
            const countVehicleWithoutInspection = VehicleInspection.checkAllCars(vehiclesList)
            setVehicleWithoutInspection(countVehicleWithoutInspection)

            const countVehiclesDueForInspection = VehicleInspection.countVehiclesDueForInspection(vehiclesList)
            setVehicleWithoutInspection(countVehiclesDueForInspection)


        })();
    }, [vehiclesList]);
  
  
    return(
        <>
            
                {/* row 1 */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Pojazdy'} count={vehiclesList.length} description={'Wszystkie pojazdy w firmie.'} icon={<DirectionsCarIcon style={{color: 'black'}}/>}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Oddziały'} count={9} description={'Ilość wszystkich aktywnych oddziałów.'} icon={<ApartmentIcon style={{color: 'black'}}/>}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Pojazdy'} count={vehiclesDueForInspection} description={'Zbliżający się termin badania technicznego.'} chipColor={`rgb(250, 173, 20)`} icon={<DepartureBoardIcon style={{color: 'white'}}/>}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Pojazdy'} count={vehiclesWithoutInspection} description={'Brak badania technicznego.'} chipColor={`rgb(217, 23, 23)`} icon={<CarCrashIcon style={{ color: 'white' }}/>}/>
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                {/*<Grid item xs={12} md={7} lg={8}>*/}
                {/*    <Grid container alignItems="center" justifyContent="space-between">*/}
                {/*        <Grid item>*/}
                {/*            <Typography variant="h5">Ostatnie zmiany</Typography>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>*/}
                {/*        <Changelog/>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} md={5} lg={4}>*/}
                {/*    <Grid container alignItems="center" justifyContent="space-between">*/}
                {/*        <Grid item p={1}>*/}
                {/*            <Typography variant="body1">Ostatnio dodani kierowcy</Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item />*/}
                {/*    </Grid>*/}
                {/*    <Paper>*/}
                {/*        <DashboardLastDriver/>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

                {/*/!* row 3 *!/*/}
                {/*<Grid item xs={12} md={7} lg={8}>*/}
                {/*    <Grid container alignItems="center" justifyContent="space-between">*/}
                {/*        <Grid item>*/}
                {/*            <Typography variant="h5">TYTUL CZEGOS/SEKCJI</Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item />*/}
                {/*    </Grid>*/}
                {/*   */}
                {/*</Grid>*/}
                {/*<Grid item xs={12} md={5} lg={4}>*/}
                {/*    <Grid container alignItems="center" justifyContent="space-between">*/}
                {/*        <Grid item>*/}
                {/*            <Typography variant="body1">Ostatnio dodane pojazdy</Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item />*/}
                {/*    </Grid>*/}
                {/*    <Paper>*/}
                {/*        <DashboardLastVehicles/>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}

            
        </>
    )
}