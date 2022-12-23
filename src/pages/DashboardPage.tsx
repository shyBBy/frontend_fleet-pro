import React from "react";
import {Grid, Paper} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";

export const DashboardPage = () => {
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
                        <i className="fa-solid fa-cars"></i>
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
                        <p>KARTA JAKAS TAM 3</p>
                    </Paper>
                </Grid>
            </>
        </MainLayout>
    )
}