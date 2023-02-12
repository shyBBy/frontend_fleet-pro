import React from "react";
import {Box, Container, Grid, Modal} from "@mui/material";
import {CreateVehicleForm} from "../Forms/CreateVehicleForm";



export const VehicleAddContainer = () => {

    return(
        <>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <CreateVehicleForm/>
                </Grid>
            </Container>
        </>
    )
}