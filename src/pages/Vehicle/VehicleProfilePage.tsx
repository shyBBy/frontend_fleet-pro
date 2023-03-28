import React, {useEffect, useState} from "react";
import {GetOneVehResponse} from 'types'
import {useParams} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import {Box, Grid, Paper} from "@mui/material";
import {HeaderContainer} from "../../components/Vehicle/VehicleProfilePage/Header/HeaderContainer";
import {config} from "../../config/config";
import {MainContent} from "../../components/Vehicle/VehicleProfilePage/MainContent/MainContent";

interface RouteParams {
    id: string;
}

export const VehicleProfilePage = () => {

    const [vehicle, setVehicle] = useState<GetOneVehResponse | null>(null);

    const {id} = useParams<{ id?: string }>()


    useEffect(() => {
        fetch(`${config.API_URL}/vehicle/${id}`, {
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => setVehicle(data))
            .catch(error => console.error(error));
    }, []);

    if (!vehicle) {
        return <div>Ładowanie...</div>;
    }
    return (
        <>
            <MainLayout>
                <>
                    <HeaderContainer vehicle={vehicle}/>
                    <MainContent vehicle={vehicle} />
                </>
            </MainLayout>
        </>
    );
}