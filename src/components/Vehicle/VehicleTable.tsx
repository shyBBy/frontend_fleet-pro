import React, {useEffect, useState} from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import { useTheme } from '@mui/material/styles';
import {GetListOfVehiclesResponse} from 'types'
import {VehicleSingleItem} from "./VehicleSingleItem";
import {
    Avatar,
    Box,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TablePagination,
    TextField, Tooltip
} from "@mui/material";
import {toast} from "react-toastify";
import onChange = toast.onChange;
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import {Link} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const columns: GridColDef[] = [
    { field: 'photo', headerName: 'Zdjęcie', width: 150, renderCell: (params) => (
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src={params.value}/>
        ) },
    { field: 'registerNumber', headerName: 'Numer rejestracyjny', width: 160 },
    { field: 'name', headerName: 'Marka', width: 120 },
    { field: 'model',  headerName: 'Model',  width: 100},
    { field: 'vehicleType',  headerName: 'Typ',  width: 100},
    { field: 'place',  headerName: 'Oddział',  width: 100},
    { field: 'settings',  headerName: 'Opcje',  width: 100,align: 'right' , renderCell: (params) => (
            <>
                <Tooltip title="Usuń pojazd">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Link to={`/vehicle/${params.id}`}>
                    <Tooltip title="Profil pojazdu">
                        <IconButton>
                            <BusAlertIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </>
        )},
];



export const VehicleTable = () => {
    const [vehiclesList, setVehiclesList] = useState<GetListOfVehiclesResponse>([])
    //@TODO: Do utworzenia typ dla order
    const [order, setOrder] = useState<any>('asc');
    const [sort, setSort] = useState('')
    const [sortValue, setSortValue] = useState('')
    const [resultsCount, setResultsCount] = useState(0)
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(2);

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3002/vehicle/list?page=${page}&order=${order}&${sort}=${sortValue}`, {
                credentials: 'include',
            })
            const data = await res.json()
            console.log(data)
            setResultsCount(data.resultsCount)
            setVehiclesList(data.vehicles)

        })();
    }, [page, sort, sortValue]);



    if (vehiclesList === null) {
        return <p>Wczytywanie...</p>
    }


    return(
        <>
            <Box style={{ height: 450, width: `100%` }}>
                <DataGrid
                    rows={vehiclesList}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Box>
        </>
    )
}