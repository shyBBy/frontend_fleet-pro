import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";


export const VehicleRemovePage = () => {

    const [error, setError] = useState(null);

    const { id } = useParams<{ id?: string }>()
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`/vehicle/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok ID: ${id}`);
                }
                navigate('/vehicles'); // przekieruj użytkownika na listę pojazdów po usunięciu
            })
            .catch(error => {
                console.log(error)
                console.error('There was a problem with the fetch operation:', error);
                setError(error.message);
            });
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    return <div>Usuwanie pojazdu...</div>;
}