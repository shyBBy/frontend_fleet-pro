import React from "react";
import {Box, Grid} from "@mui/material";
import sprinters from '../../../../assets/img/sprinters.jpeg'

export const Header = (props: any) => {
    const {vehiclePhoto} = props
    return(
        <Grid item xs={12} md={7} lg={12}>
            <Box
            sx={{
                backgroundImage: `url(${sprinters})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: `30vh`,
            }}
            >
            </Box>
        </Grid>
    )
}