import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {MainLayout} from "../layouts/MainLayout";
import {LoginPage} from "../pages/LoginPage";
import {RegisterPage} from "../pages/RegisterPage";
import {NotLogin} from "./NotLogin";

export const UnAuthenticatedApp = () => {

    const { user } = useAuth();

    return(
        <>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path='*' element={<NotLogin/>} />
                    <Route
                        path="*"
                        element={user? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
                    />
                </Routes>
        </>
    )
}