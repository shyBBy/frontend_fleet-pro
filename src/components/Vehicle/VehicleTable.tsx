import React, {useEffect, useState, useContext, SyntheticEvent} from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { useTheme } from '@mui/material/styles';
import {GetListOfVehiclesResponse} from 'types'
import {VehicleSingleItem} from "./VehicleSingleItem";
import {TextField} from "@mui/material";
import {VehicleTableOptions} from "./VehicleTableOptions";



export const VehicleTable = () => {
    const [vehiclesList, setVehiclesList] = useState<GetListOfVehiclesResponse>([])
    //@TODO: Do utworzenia typ dla order
    const [order, setOrder] = useState<any>('asc');
    const [sort, setSort] = useState('')
    const [sortValue, setSortValue] = useState('')
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(2);
    const [maxPage, setMaxPage] = useState(0)
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('')

    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3002/vehicle/list?page=${page}&count=${rowsPerPage}&order=${order}&${sort}=${sortValue}&search=${search}`, {
                credentials: 'include',
            })
            const data = await res.json()
            console.log(data)
            setMaxPage(data.pagesCount)
            setVehiclesList(data.vehicles)
            setCount(data.resultsCount)

        })();
    }, [rowsPerPage, page, sort, sortValue, search]);

    const handleChange = (e: any, p: any) => {
        setPage(p)
    }

    if (vehiclesList === null) {
        return <p>Wczytywanie...</p>
    }


    return(
        <>
                search: {search}
            <form className="search" onSubmit={setSearchFromLocalState}>
                <TextField id="outlined-search" label="Szukaj" type="search" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            </form>
            <VehicleTableOptions maxPage={maxPage} handleChangePage={handleChange} />
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