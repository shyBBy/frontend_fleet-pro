import React from "react";

import {Grid, useTheme} from "@mui/material";
import {Header} from "./Header";

export const HeaderContainer = (props: any) => {
    const {vehicle} = props

    const theme = useTheme();

    return (
        <>
            <Header vehicle={vehicle}/>
            <Grid item md={8} sx={{display: {sm: 'none', md: 'block', lg: 'none'}}}/>
        </>
    );
};


