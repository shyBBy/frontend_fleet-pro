import React from "react";
import {Login} from "../components/Login/Login";
import {useAuth} from "../hooks/useAuth";

export const LoginPage = () => {

    const {user} = useAuth()
    return(
        <>
            {user ? `jest uzytkownik: ${user.id}` : `nie ma uzytkownika: ${user}` }
            <Login/>
        </>
    )
}