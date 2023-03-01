import React, {useState} from "react";
import {GetOneVehResponse} from 'types'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Avatar, IconButton, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import {Link} from "react-router-dom";

export const VehicleSingleItem = (props: any) => {
  
  const isValidInspection = VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)

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
                    <TableCell>{vehicle.placeName}</TableCell>
                    <TableCell>{vehicle.vinNumber}</TableCell>
                    <TableCell>{isValidInspection ? 'Aktualny' : 'Nieaktualny'}</TableCell>
                    <TableCell align="right">
                        <Tooltip title="Usuń pojazd">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Link to={`/vehicle/${vehicle.id}`}>
                            <Tooltip title="Profil pojazdu">
                                <IconButton>
                                    <BusAlertIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </TableCell>
                </TableRow>
        </>
    )
}