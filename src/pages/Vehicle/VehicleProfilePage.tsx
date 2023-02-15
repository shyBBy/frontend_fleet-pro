import React, {useEffect, useState} from "react";
import {GetOneVehResponse} from 'types'
import {useParams} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import {Box, Grid, Paper} from "@mui/material";
import {a11yProps, TabPanel} from "../../components/TabPanel";
import {VehicleProfilePageBasicInfo} from "./VehicleProfilePageBasicInfo";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface RouteParams {
    id: string;
}

export const VehicleProfilePage = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [vehicle, setVehicle] = useState<GetOneVehResponse | null>(null);

    const { id } = useParams<{ id?: string }>()
    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3002/vehicle/${id}`, {
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => setVehicle(data))
            .catch(error => console.error(error));
    }, [id]);

    if (!vehicle) {
        return <div>Ładowanie...</div>;
    }
    return (
        <MainLayout>
               <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="Główne informacje" {...a11yProps(0)} />
                                                <Tab label="Edytuj" {...a11yProps(1)} />
                                                <Tab label="Historia zmian" { ...a11yProps(2)} />
                                            </Tabs>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                          <VehicleProfilePageBasicInfo vehicle={vehicle} />
                       </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            edycja
                                        </TabPanel>
                       <TabPanel value={value} index={2}>
                                                     historia zmian
                                                               </TabPanel>
                                        
                                    </Box>
                                </Paper>
                            </Grid>
        </MainLayout>
    );
}