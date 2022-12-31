import React from "react";
import {
    AvatarGroup, Box,
    Button,
    Grid,
    ListItemAvatar, ListItemButton,
    ListItemSecondaryAction, ListItemText, MenuItem,
    Paper,
    Stack, TextField,
    Typography
} from "@mui/material";
import {MessageOutlined} from "@mui/icons-material";
import {MainCard} from "../MainCard";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';



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

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

export const Dashboard = () => {
    return(
        <>
            
                {/* row 1 */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Pojazdy'} count={134} description={'Wszystkie pojazdy w firmie.'} icon={<DirectionsCarIcon style={{color: 'black'}}/>}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Oddziały'} count={9} description={'Ilość wszystkich aktywnych oddziałów.'} icon={<ApartmentIcon style={{color: 'black'}}/>}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Pojazdy'} count={78} description={'Zbliżający się termin badania technicznego.'} chipColor={`rgb(250, 173, 20)`} icon={<DepartureBoardIcon style={{color: 'white'}}/>}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Pojazdy'} count={3} description={'Brak badania technicznego.'} chipColor={`rgb(217, 23, 23)`} icon={<CarCrashIcon style={{ color: 'white' }}/>}/>
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">TYTUL CZEGOS</Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={0}>
                               <Button variant={'contained'}>Jakis przycisk</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    ZAWARTOSC
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">TYTUL CZEGOS/SEKCJI</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    cos tam
                </Grid>

                {/* row 3 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">TYTUL CZEGOS/SEKCJI</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                   
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">TYTUL CZEGOS/SEKCJI</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    Tabelki, informacje, teksty - cos tu bedzie
                </Grid>

            
        </>
    )
}