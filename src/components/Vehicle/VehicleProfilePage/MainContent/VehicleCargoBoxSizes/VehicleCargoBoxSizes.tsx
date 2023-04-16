import React from "react";
import {Grid, Icon, Stack, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {blue} from "@mui/material/colors";

//ICONS
import VehicleCargoSize from '../../../../../assets/icons/vehicleProfile/icons8-surface-50.png'


export const VehicleCargoBoxSizes = (props: any) => {
    const {data} = props
    const technicalData = data[0]


    if (data.length === 0) {
        return <Typography variant="subtitle2" color="textSecondary">Brak technicznych danych pojazdu, proszę uzupełnij
            je.</Typography>
    }


    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: blue[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCargoSize}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Szerokość kipy</Typography>
                            <Typography>{technicalData.cargoBedWidth} cm</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: blue[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCargoSize}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Długość kipy</Typography>
                            <Typography>{technicalData.cargoBedLenght} cm</Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} lg={4}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{bgcolor: blue[500]}}>
                            <Icon><img style={{width: '100%'}} src={VehicleCargoSize}/></Icon>
                        </Avatar>
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">Wysokość kipy</Typography>
                            <Typography>{technicalData.cargoBedHeight} cm</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}