import React, {useState, createContext, useContext} from "react";
import {GetOneVehResponse} from 'types'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Avatar, IconButton, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import {Link, useNavigate} from "react-router-dom";
import {VehicleInspection} from "../../helpers/VehicleInspection.helper";
import {toast} from "react-toastify";
import {RemoveVehicleContext} from "../../context/RemoveVehicleContext";
import { config } from "../../config/config";



export const VehicleSingleItem = (props: any) => {
    const {vehicle} = props

    // const [isDeleting, setIsDeleting] = useState(false);

    const {setIsDeleting} = useContext(RemoveVehicleContext)

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            // setIsUpdated((prevState) => !prevState);
            const response = await fetch(`${config.API_URL}/${vehicle.id}`, {
                method: "DELETE",
                credentials: 'include'
            });
            if (response.ok) {
                toast.success(`Pomyślnie usunięto pojazd: ${vehicle.registerNumber}`, {
                    position: "bottom-right",
                    theme: "light",
                    autoClose: 1500,
                });
            } else {
                throw new Error("Wystąpił błąd podczas usuwania pojazdu");
            }
        } catch (err) {
            console.error(err);
            toast.error("Wystąpił błąd podczas usuwania pojazdu", {
                position: "bottom-right",
                theme: "light",
                autoClose: 1500,
            });
        } finally {
            setIsDeleting(false);
        }
    };

    const isValidInspection = VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)


    // Funkcja obsługująca kliknięcie w przycisk usuwania
    // const handleRemoveClick = async (e: React.MouseEvent<HTMLButtonElement>, vehicleId: string, registerNumber: string) => {
    //     e.preventDefault();
    //     try {
    //         await fetch(`http://localhost:3002/vehicle/${vehicleId}`, {
    //             method: 'DELETE',
    //             credentials: 'include',
    //         });
    //         toast.success(`Pomyślnie usunięto pojazd: ${registerNumber}`, {
    //             position: "bottom-right",
    //             theme: "light",
    //             autoClose: 1500,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         toast.error('Wystąpił błąd podczas usuwania pojazdu', {
    //             position: "bottom-right",
    //             theme: "light",
    //             autoClose: 1500,
    //         });
    //     }
    //
    //     }

    return(
        <>
                <TableRow>
                    <TableCell>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src={vehicle.photo}/>
                    </TableCell>
                    <TableCell>{vehicle.registerNumber}</TableCell>
                    <TableCell>{vehicle.name}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.vehicleType}</TableCell>
                    <TableCell>{vehicle.placeName}</TableCell>
                    <TableCell>{vehicle.vinNumber}</TableCell>
                    <TableCell>{isValidInspection ? 'Aktualny' : 'Nieaktualny'}</TableCell>
                    <TableCell align="right">
                            <Tooltip title="Usuń pojazd">
                                <IconButton onClick={handleDelete} >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        <Link to={`/vehicle/${vehicle.id}`}>
                            <Tooltip title="Profil pojazdu">
                                <IconButton>
                                    <BusAlertIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </TableCell>
                </TableRow>
        </>
    )
}