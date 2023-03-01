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
    Menu, Typography, Grid, Popover, Toolbar
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
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [maxPage, setMaxPage] = useState(0)
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('')
    const [searchType, setSearchType] = useState('registerNumber')

    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3002/vehicle/list?page=${page}&count=${rowsPerPage}&order=${order}&sort=${sort}&sortValue=${sortValue}&searchType=${searchType}&searchValue=${search}`, {
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
    
    const handleChangeRows = (e: any, count: any) => {
      
      setRowsPerPage(count)
    }
    const handleRowsPerPageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(event.target.value as number);
  };
  

    if (vehiclesList === null) {
        return <p>Wczytywanie...</p>
    }

    return (
        <>
      <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Table title
        </Typography>
        
        <FormControl>
      <InputLabel id="rows-per-page-label">Rows per page</InputLabel>
      <Select
        labelId="rows-per-page-label"
        id="rows-per-page"
        value={rowsPerPage}
        onChange={handleRowsPerPageChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
        
        <VehicleTableOptions maxPage={maxPage} handleChangePage={handleChange}/>
        
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
    </Toolbar>  
                    
    <form className="search" onSubmit={setSearchFromLocalState}>              <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
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
                                  
                                </form>
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

