import React from "react";
import {GetOneVehResponse} from 'types'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Avatar, IconButton, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BusAlertIcon from '@mui/icons-material/BusAlert';

export const VehicleSingleItem = (props: any) => {
    const {vehicle} = props
    return(
        <>
                <TableRow>
                    <TableCell>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src={vehicle.photo}/>
                    </TableCell>
                    <TableCell>{vehicle.registerNumber}</TableCell>
                    <TableCell>{vehicle.name}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.vehicleType}</TableCell>
                    <TableCell>Lokalizacja oddziału</TableCell>
                    <TableCell align="right">
                        <Tooltip title="Usuń pojazd">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Profil pojazdu">
                            <IconButton>
                                <BusAlertIcon />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                </TableRow>
        </>
    )
}