import React from "react";
import {Grid, Paper} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {DashboardPage} from "../pages/DashboardPage";
import {NotFound404} from "./NotFound404";
import {EmployeesPage} from "../pages/EmployeesPage";
import {VehiclesPage} from "../pages/Vehicle/VehiclesPage";
import {PlacesPage} from "../pages/Place/PlacesPage";
import {SettingsPage} from "../pages/SettingsPage";
import {VehicleProfilePage} from "../pages/Vehicle/VehicleProfilePage";

export const AuthenticatedApp = () => {

    const { user } = useAuth();

    return(
        <>
                <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/employees" element={<EmployeesPage />} />
                    <Route path="/vehicles" element={<VehiclesPage />} />
                    <Route path="/vehicle/:id" element={<VehicleProfilePage/>} />
                    <Route path="/places" element={<PlacesPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route
                        path="/"
                        element={user? <Navigate to="/dashboard" replace /> : <Navigate to="/dashboard" replace />}
                    />
                    <Route
                        path="/login"
                        element={user? <Navigate to="/dashboard" replace /> : <Navigate to="/dashboard" replace />}
                    />
                    <Route
                        path="/register"
                        element={user? <Navigate to="/dashboard" replace /> : <Navigate to="/dashboard" replace />}
                    />
                    <Route path='*' element={<NotFound404/>} />
                </Routes>
        </>
    )
}