import React, {useEffect, useState} from "react";
import {GetOneVehResponse} from 'types'
import {useParams} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import {Box, Grid, Paper} from "@mui/material";
import {a11yProps, TabPanel} from "../../components/TabPanel";
import {VehicleProfilePageBasicInfo} from "./VehicleProfilePageBasicInfo";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {HeaderContainer} from "../../components/Vehicle/VehicleProfilePage/Header/HeaderContainer";

interface RouteParams {
    id: string;
}

export const VehicleProfilePage = () => {

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
        <>
            <MainLayout>
                <>
                    <Grid item xs={12}>
                        <HeaderContainer vehicle={vehicle}/>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </>
            </MainLayout>
        </>
    );
}