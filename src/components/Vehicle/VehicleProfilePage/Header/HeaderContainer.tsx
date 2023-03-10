import React from "react";

import {Avatar, Box, Grid, useTheme} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import sprinters from '../../../../assets/img/sprinters.jpeg'
import {TabPanelComponent} from "../TabsMenu/TabPanelComponent";
import {BasicInfoStack} from "./BasicInfoStack";

export const HeaderContainer = (props: any) => {
    const {vehicle} = props

    const theme = useTheme();
    return (
        <>
            <Grid container>
                {/* Element Box z ustawionym tłem obrazka */}
                <Grid item xs={12} sx={{ position: {md: 'relative', lg: 'relative', xl: 'relative'} }}>
                    <Box
                        sx={{
                            backgroundImage: `url(${sprinters})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "30vh",
                        }}
                    >
                        {/* Komponent Avatar */}
                        <Box
                            sx={{
                                position: {md: 'absolute', lg: 'absolute', xl: 'absolute'},
                                top: "115%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                borderRadius: "50%",
                                padding: "5px",
                            }}
                        >
                            {/*<Avatar*/}
                            {/*    src={vehicle.photo}*/}
                            {/*    sx={{ width: 100, height: 100, border: `solid 4px`, borderColor: `rgb(111, 255, 255)` }}*/}
                            {/*    variant="rounded"*/}
                            {/*/>*/}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: theme.palette.background.paper }} alignItems="center" justifyContent="center">
                <Grid item xs={11} lg={6}>
                    <Grid container >
                        <Grid item xs={4} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <BasicInfoStack title={'Numer rejestracyjny'} description={vehicle.registerNumber}/>
                        </Grid>
                        <Grid item xs={4} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <BasicInfoStack title={'Marka'} description={vehicle.name}/>
                        </Grid>
                        <Grid item xs={4} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <BasicInfoStack title={'Model'} description={vehicle.model}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container>
                        <Grid item xs={3} lg={3} sx={{ display: 'flex', justifyContent: {xs: 'center'}, alignItems: {xs: 'center'} }}>
                            <BasicInfoStack title={'Helmos'} description={3}/>
                        </Grid>
                        <Grid item xs={3} lg={3} sx={{ display: 'flex', justifyContent: {xs: 'center'}, alignItems: {xs: 'center'} }}>
                            <BasicInfoStack title={'Helmos'} description={3}/>
                        </Grid>
                        <Grid item xs={3} lg={3} sx={{ display: 'flex', justifyContent: {xs: 'center'}, alignItems: {xs: 'center'} }}>
                            <BasicInfoStack title={'Helmos'} description={3}/>
                        </Grid>
                        <Grid item xs={3} lg={3} sx={{ display: 'flex', justifyContent: {xs: 'center'}, alignItems: {xs: 'center'} }}>
                            <BasicInfoStack title={'Helmos'} description={3}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12} >
                <Box sx={{ backgroundColor: theme.palette.background.paper }}>
                    <TabPanelComponent vehicle={vehicle}/>
                </Box>
            </Grid>
        </>
    );
};


