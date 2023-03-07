import React from "react";
import {Grid, Paper} from "@mui/material";

import {VehicleTable} from "./VehicleTable";
import {RemoveVehicleProvider} from "../../context/RemoveVehicleContext";


export const VehiclesList = () => {


    return(
        <>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <RemoveVehicleProvider>
                        <VehicleTable/>
                    </RemoveVehicleProvider>
                </Paper>
            </Grid>
        </>
    )
}