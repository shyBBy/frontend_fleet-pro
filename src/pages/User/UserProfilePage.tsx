import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MainLayout} from "../../layouts/MainLayout";
import {UserRes} from 'types'
import {config} from "../../config/config";

interface RouteParams {
    id: string;
}

export const UserProfilePage = () => {

    const [user, setUser] = useState<UserRes | null>(null);
    const {id} = useParams<{ id?: string }>()

    useEffect(() => {
        fetch(`${config.API_URL}/user/${id}`, {
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, []);

    if (!user) {
        return <div>Ładowanie...</div>;
    }

    return(
        <>
            <MainLayout>
                <>
                    Uzytkownik o id: {user.id}
                    
                </>
            </MainLayout>
        </>
    )
}