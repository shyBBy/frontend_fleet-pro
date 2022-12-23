import React from "react";
import {MainLayout} from "../layouts/MainLayout";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Avatar, Grid, Paper, TableContainer, TablePagination} from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function createData(
    id: number,
    photo: string,
    model: string,
    plateNumber: string,
    location: string,
    settings: string,
) {
    return { id, photo, plateNumber, model, location, settings };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        'Mercedes Sprinter',
        'ELW GH72',
        'Łódź',
        'Opcje',
    ),
    createData(
        1,
        '16 Mar, 2019',
        'Mercedes Sprinter',
        'DW 3SW70',
        'Łódź',
        'Opcje',
    ),
    createData(
        2,
        '16 Mar, 2019',
        'Opel Insignia',
        'EL 765GV',
        'Łódź',
        'Opcje'),
    createData(
        3,
        '16 Mar, 2019',
        'Mercedes Sprinter',
        'EL 710SV',
        'Łódź',
        'Opcje',
    ),
    createData(
        4,
        '15 Mar, 2019',
        'Renault Master',
        'DW 3SW69',
        'Łódź',
        'Opcje',
    ),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export const VehiclesPage = () => {


    return(
        <MainLayout>
            <>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <p>KARTA JAKAS TAM 2 </p>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <React.Fragment>
                            Lista pojazdów
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Zdjecie</TableCell>
                                        <TableCell>Marka</TableCell>
                                        <TableCell>Model</TableCell>
                                        <TableCell>Oddział</TableCell>
                                        <TableCell align="right">Opcje</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell><Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                <LocalShippingIcon />
                                            </Avatar></TableCell>
                                            <TableCell>{row.plateNumber}</TableCell>
                                            <TableCell>{row.model}</TableCell>
                                            <TableCell>{row.location}</TableCell>
                                            <TableCell align="right">{`${row.settings}`}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                                See more orders
                            </Link>
                        </React.Fragment>
                    </Paper>
                </Grid>
            </>
        </MainLayout>
    )
}