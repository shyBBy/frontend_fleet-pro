import React from "react";
import {Box, Container, Grid, Modal, Paper, Stack, Typography} from "@mui/material";
import {CreateVehicleForm} from "../Forms/CreateVehicleForm";
import bg from "../../assets/bg/group-trucks-parked-raow.jpg";
import logo from "../../assets/img/logoBlackv2.png";


export const VehicleAddContainer = () => {

    return(
        <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        lg={5}
                        sx={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: {xs: 'none', lg: 'block'}
                        }}
                    >
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={7}>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant={'overline'}>DODAJ NOWY POJAZD DO BAZY DANYCH</Typography>
                            <CreateVehicleForm/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}