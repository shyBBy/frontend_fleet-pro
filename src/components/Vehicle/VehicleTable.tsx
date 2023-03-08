import React, {useEffect, useState, useContext, SyntheticEvent} from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {useTheme} from '@mui/material/styles';
import {GetListOfVehiclesResponse} from 'types'
import {VehicleSingleItem} from "./VehicleSingleItem";
import {
    Box,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TablePagination,
    TextField,
    Menu, Typography, Grid, Popover, Toolbar, Tooltip, TableContainer
} from "@mui/material";

import {VehicleTableOptions} from "./VehicleTableOptions";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {RemoveVehicleContext} from "../../context/RemoveVehicleContext";
import { config } from "src/config/config";

export const VehicleTable = () => {
    const [vehiclesList, setVehiclesList] = useState<GetListOfVehiclesResponse>([])
    //@TODO: Do utworzenia typ dla order
    const [order, setOrder] = useState<any>('asc');
    const [sort, setSort] = useState('')
    const [sortValue, setSortValue] = useState('')
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [maxPage, setMaxPage] = useState(0)
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('')
    const [inputVal, setInputVal] = useState(search);
    const {isDeleting} = useContext(RemoveVehicleContext)


    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    useEffect(() => {
        (async () => {

            const res = await fetch(`${config.API_URL}/vehicle/list?page=${page}&count=${rowsPerPage}&order=${order}&search=${search}`, {
                credentials: 'include',
            })
            const data = await res.json()
            setMaxPage(data.pagesCount)
            setVehiclesList(data.vehicles)
            setCount(data.resultsCount)

        })();
    }, [rowsPerPage, page, search, isDeleting]);

    const handleChange = (e: any, p: any) => {
        setPage(p)
    }

    // const handleChangeRows = (e: any, count: any) => {
    //
    //     setRowsPerPage(count)
    // }
    // const handleRowsPerPageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setRowsPerPage(event.target.value as number);
    // };


    if (vehiclesList === null) {
        return <p>Wczytywanie...</p>
    }

    return (
        <>
            <Toolbar
                sx={{
                    pl: {sm: 2},
                    pr: {xs: 1, sm: 1}
                }}
            >
                <Box>
                    <form className="search" onSubmit={setSearchFromLocalState}>
                        <TextField id="outlined-search" label={<SearchIcon/>} type="search" size="small" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                    </form>
                </Box>
                <Box>
                    <VehicleTableOptions maxPage={maxPage} handleChangePage={handleChange}/>
                </Box>
                <Box>
                    <Tooltip title="Filtry">
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Zdjecie</TableCell>
                            <TableCell>Numer rejestracyjny</TableCell>
                            <TableCell>Marka</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Typ</TableCell>
                            <TableCell>Oddział</TableCell>
                            <TableCell>Numer VIN</TableCell>
                            <TableCell>Przegląd pojazdu</TableCell>
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
            </TableContainer>
        </>
    )
}

