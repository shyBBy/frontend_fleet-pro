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
    Menu, Typography, Grid, Popover
} from "@mui/material";

import {VehicleTableOptions} from "./VehicleTableOptions";
import SearchIcon from '@mui/icons-material/Search';


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
    const [searchType, setSearchType] = useState('registerNumber')

    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3002/vehicle/list?page=${page}&count=${rowsPerPage}&order=${order}&${sort}=${sortValue}&searchType=${searchType}&searchValue=${search}`, {
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


    return (
        <>

                    <Box>
                        <IconButton
                            onClick={handleClick}>
                            <SearchIcon/>
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Grid container p={2}>
                                <Grid item lg={12}>
                                    <Typography variant={'overline'}>Wyszukiwanie</Typography>
                                    <Typography variant={'body2'}>Wybierz typ wyszukiwania, a następnie w polu obok podaj interesującą Cię frazę.</Typography>
                                </Grid>
                                <form className="search" onSubmit={setSearchFromLocalState}>
                                    <Grid item lg={12} p={1}>
                                        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                                            <InputLabel id="search-type-label">Typ wyszukiwania</InputLabel>
                                            <Select
                                                labelId="search-type-label"
                                                label="Typ wyszukiwania"
                                                id="search-type"
                                                // value={listVal}
                                                // onChange={e => setListVal(e.target.value)}

                                            >
                                                <MenuItem value="">Wybierz opcję</MenuItem>
                                                <MenuItem value="registerNumber">Numer rejestracyjny</MenuItem>
                                                <MenuItem value="vinNumber">Numer VIN</MenuItem>
                                                <MenuItem value="name">Nazwa</MenuItem>
                                                <MenuItem value="placeName">Nazwa miejsca</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField id="outlined-search" label="Szukaj" type="search" size="small" value={inputVal}
                                                   onChange={e => setInputVal(e.target.value)}/>
                                    </Grid>
                                </form>
                            </Grid>
                        </Popover>
                    </Box>


                    <VehicleTableOptions maxPage={maxPage} handleChangePage={handleChange}/>

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