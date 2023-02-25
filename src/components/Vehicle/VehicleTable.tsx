import React, {useEffect, useState} from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {GetListOfVehiclesResponse} from 'types'
import {VehicleSingleItem} from "./VehicleSingleItem";

export const VehicleTable = () => {
    const [vehiclesList, setVehiclesList] = useState<GetListOfVehiclesResponse>([])


    useEffect(() => {
        (async () => {

            const res = await fetch('http://localhost:3002/vehicle/list?page=1', {
                credentials: 'include',
            })
            const data = await res.json()
            console.log(data)

            setVehiclesList(data.vehicles)

        })();
    }, []);
    if (vehiclesList === null) {
        return <p>Wczytywanie...</p>
    }

    return(
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Zdjecie</TableCell>
                        <TableCell>Numer rejestracyjny</TableCell>
                        <TableCell>Marka</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Typ</TableCell>
                        <TableCell>Oddział</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        vehiclesList.map(vehicle => (
                            <VehicleSingleItem vehicle={vehicle} key={vehicle.id}/>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}