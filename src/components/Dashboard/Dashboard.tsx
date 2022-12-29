import React from "react";
import {
    AvatarGroup, Box,
    Button,
    Grid,
    ListItemAvatar, ListItemButton,
    ListItemSecondaryAction, ListItemText, MenuItem,
    Paper,
    Stack, TextField,
    Typography
} from "@mui/material";
import {MessageOutlined} from "@mui/icons-material";
import {MainCard} from "../MainCard";



// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

export const Dashboard = () => {
    return(
        <>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* row 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard title={'Testowy'}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <MainCard/>
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Unique Visitor</Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" alignItems="center" spacing={0}>
                                cos tam
                            </Stack>
                        </Grid>
                    </Grid>
                    ZAWARTOSC
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Income Overview</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    cos tam
                </Grid>

                {/* row 3 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Recent Orders</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    COS TAM ZNOW
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Analytics Report</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    dsadsa
                </Grid>

            </Grid>
        </>
    )
}