import React, {useContext, useState} from "react";
import {MainLayout} from "../../layouts/MainLayout";
import {
    Box,
    Button,
    Grid,
    Paper,
} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {a11yProps, TabPanel} from "../../components/TabPanel";
import {VehiclesList} from "../../components/Vehicle/VehiclesList";
import {VehicleAddContainer} from "../../components/Vehicle/VehicleAddContainer";


function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}


export const VehiclesPage = () => {
    const [value, setValue] = React.useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
            <MainLayout>
                <>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Lista pojazdów" {...a11yProps(0)} />
                                        <Tab label="Dodaj nowy pojazd" {...a11yProps(1)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <VehiclesList/>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <VehicleAddContainer/>
                                </TabPanel>
                            </Box>
                        </Paper>
                    </Grid>
                </>
            </MainLayout>
    )
}