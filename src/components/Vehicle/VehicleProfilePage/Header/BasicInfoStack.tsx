import React from "react";
import {BasicInfoStackInterface} from "../../../../interfaces/components.interfaces";
import {Box, CardContent, Chip, Grid, Paper, Stack, Typography} from "@mui/material";
import {TabPanelComponent} from "../TabsMenu/TabPanelComponent";

export const BasicInfoStack = (props: BasicInfoStackInterface) => {

    const {title, description, icon} = props

    return(
        <>
            <Stack spacing={0.5} direction='column' justifyContent='center' alignContent='center' alignItems='center'>
                <Box color={'white'} >
                    {icon ? <Chip variant="filled" icon={icon} sx={{ ml: 1.25, pl: 1, borderRadius: '4px', }} size="small"/> : null }
                </Box>
                <Typography variant="h5" color="inherit" >
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {title}
                </Typography>
            </Stack>
        </>
    )
}








