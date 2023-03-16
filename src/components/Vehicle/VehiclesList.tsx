import React from "react";
import {Grid} from "@mui/material";

import {VehicleTable} from "./VehicleTable";
import {RemoveVehicleProvider} from "../../context/RemoveVehicleContext";


export const VehiclesList = () => {


    return (
        <>
            <Grid item xs={12}>
                <RemoveVehicleProvider>
                    <VehicleTable/>
                </RemoveVehicleProvider>
            </Grid>
        </>
    )
}