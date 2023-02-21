import React from "react";
import {Box, Grid, Avatar} from "@mui/material";
import {deepOrange} from "@mui/material/colors";

interface AvatarProps {
    vehiclePhoto: string;
}

export const VehiclePhoto = ({ vehiclePhoto }: AvatarProps) => {
    return(
        <Box sx={{ p: 2 }}>
            <Avatar sx={{ backgroundColor: deepOrange[500], width: '100%', height: 'auto' }} variant="square" src={vehiclePhoto} />
        </Box>
    )
}