import React from "react";
import {StackListInformationProps} from "../../../../interfaces/components.interfaces";
import {Box, Grid, Stack, Tooltip, Typography} from "@mui/material";

export const StackListInformation = (props: StackListInformationProps) => {

    const {description, icon, title, tooltip} = props

    return(
        <>
            <Grid container>
                <Grid item xs={1.5} lg={2}>
                    <Tooltip title={tooltip} placement={'left'}>
                        <Box>
                            <img src={icon} style={{width: '25px', height: '25px'}}/>
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                    <Box>
                        <Typography mt={'0%'} variant={'body2'} >{description}</Typography>
                    </Box>
                </Grid>
            </Grid>
            {/*<Stack direction={'row'} spacing={1}>*/}
            {/*    <Tooltip title={tooltip}>*/}
            {/*            <Box>*/}
            {/*                <img src={icon} style={{width: '25px', height: '25px'}}/>*/}
            {/*            </Box>*/}
            {/*    </Tooltip>*/}
            {/*    <Box>*/}
            {/*        <Typography mt={'60%'} variant={'subtitle2'} sx={{fontSize: '21px'}}>{title}</Typography>*/}
            {/*    </Box>*/}
            {/*    <Box>*/}
            {/*        <Typography mt={'0%'} variant={'overline'} >{description}</Typography>*/}
            {/*    </Box>*/}
            {/*</Stack>*/}
        </>
    )
}