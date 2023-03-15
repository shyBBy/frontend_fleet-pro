import React from "react";
import {BasicInfoStackInterface} from "../../../../interfaces/components.interfaces";
import {Box, Chip, Stack, Typography} from "@mui/material";

export const BasicInfoStack = (props: BasicInfoStackInterface) => {

    const {model, name, registerNumber, icon} = props

    return(
        <>
            <Stack spacing={0.5} direction='column' justifyContent='center' alignContent='center' alignItems='center'>
                <Box color={'white'} >
                    {icon ? <Chip variant="filled" icon={icon} sx={{ ml: 1.25, pl: 1, borderRadius: '4px', }} size="small"/> : null }
                </Box>
                <Typography variant="h5" color="inherit" >
                    {name} {model}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {registerNumber}
                </Typography>
            </Stack>
        </>
    )
}








