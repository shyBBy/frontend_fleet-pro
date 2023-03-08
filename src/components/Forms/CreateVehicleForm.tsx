import React, { useEffect, useState } from 'react';
import { useForm , Controller} from 'react-hook-form';
import {
    TextField,
    Button,
    Box,
    Grid,
    Select,
    MenuItem
} from '@mui/material'
import {yupResolver} from "@hookform/resolvers/yup";
import {createVehicleSchema} from "../../schemas/schema";
import {VEHICLE_TYPE, VEHICLE_BRAND, VEHICLE_MODEL, DEPARTMENT_LOCATION} from 'types'
import {toast} from "react-toastify";
import {config} from '../../config/config'

const defaultValues = {
    vehicleType: "",
    name: '',
    model: '',
    registerNumber: '',
    lastDateOfVehicleInspection: '',
    nextDateOfVehicleInspection: '',
    photo: '',
    vinNumber: '',
    yearOfProduction: '',
    firstRegistrationDate: '',
    policyNumber: '',
    placeName: '',
}



export const CreateVehicleForm = () => {

    const [message, setMessage] = useState('');

    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(createVehicleSchema),
        defaultValues: defaultValues,
    });

    const onSubmit = async (data: any) => {
        try {
            const res = await fetch(`${config.API_URL}/vehicle/create`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                toast.error(`${data.message}`, {
                    position: "bottom-right",
                    theme: "light",
                    autoClose: 2000,
                })
                return
            }

            return res.json().then((data) => {
                setMessage(data.message);
                toast.success(`Pomyślnie utworzono pojazd`, {
                    position: "bottom-right",
                    theme: "light",
                    autoClose: 1500,
                })
                return data;
            });
        } catch (error) {

            toast.error('Coś poszło nie tak, spróbuj raz jeszcze.', {
                position: 'bottom-right',
                theme: 'light',
                autoClose: 1500,
            })
            return

        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset(defaultValues);
        }
    }, [isSubmitSuccessful, reset]);



    // @ts-ignore
    return (
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={4}>
                    <Controller
                        name="registerNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="registerNumber"
                                label="Numer rejestracyjny"
                                type="text"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                sx={{ mx: 1, my: 1 }}
                                {...register('registerNumber')}
                                error={!!errors?.registerNumber}
                                helperText={errors['registerNumber'] ? errors['registerNumber'].message : ''}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={4}>
                    <Controller
                        name="yearOfProduction"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="yearOfProduction"
                                label="Rok produkcji"
                                type="number"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                sx={{ mx: 1, my: 1 }}
                                {...register('yearOfProduction')}
                                error={!!errors?.yearOfProduction}
                                helperText={errors['yearOfProduction'] ? errors['yearOfProduction'].message : ''}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={4}>
                    <Controller
                        name="firstRegistrationDate"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="firstRegistrationDate"
                                label="Data pierwszej rejestracji"
                                type="text"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                sx={{ mx: 1, my: 1 }}
                                {...register('firstRegistrationDate')}
                                error={!!errors?.firstRegistrationDate}
                                helperText={errors['firstRegistrationDate'] ? errors['firstRegistrationDate'].message : ''}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="vinNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="vinNumber"
                                label="Numer VIN"
                                type="text"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                sx={{ mx: 1, my: 1 }}
                                {...register('vinNumber')}
                                error={!!errors?.vinNumber}
                                helperText={errors['vinNumber'] ? errors['vinNumber'].message : ''}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="policyNumber"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="policyNumber"
                                label="Numer polisy OC"
                                type="text"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                sx={{ mx: 1, my: 1 }}
                                {...register('policyNumber')}
                                error={!!errors?.policyNumber}
                                helperText={errors['policyNumber'] ? errors['policyNumber'].message : ''}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                    <Grid item>

                        <Controller
                            name="lastDateOfVehicleInspection"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: {...field } }) => (
                                <TextField
                                    {...field}
                                    id="lastDateOfVehicleInspection"
                                    type="date"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    InputLabelProps={{ shrink: true }}
                                    label='Data ostatniego przeglądu'
                                    sx={{ mx: 1, my: 1 }}
                                    {...register('lastDateOfVehicleInspection')}
                                    error={!!errors?.lastDateOfVehicleInspection}
                                    helperText={errors['lastDateOfVehicleInspection'] ? errors['lastDateOfVehicleInspection'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="nextDateOfVehicleInspection"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="nextDateOfVehicleInspection"
                                type="date"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                InputLabelProps={{ shrink: true }}
                                label='Data następnego przeglądu'
                                sx={{ mx: 1, my: 1 }}
                                {...register('nextDateOfVehicleInspection')}
                                error={!!errors?.nextDateOfVehicleInspection}
                                helperText={errors['nextDateOfVehicleInspection'] ? errors['nextDateOfVehicleInspection'].message : ''}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={12}>
                    <Controller
                        name="photo"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <TextField
                                {...field}
                                id="photo"
                                label="Adres URL do zdjęcia"
                                type="text"
                                variant="standard"
                                required
                                fullWidth
                                autoComplete="off"
                                sx={{ mx: 1, my: 1 }}
                                {...register('photo')}
                                error={!!errors?.photo}
                                helperText={errors['photo'] ? errors['photo'].message : ''}
                            />
                        )}
                    />
                </Grid>




                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="vehicleType"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <Select
                                {...field}
                                {...register('vehicleType')}
                                error={!!errors?.vehicleType}
                                id="vehicleType"
                                value={field.value || 'Wybierz typ pojazdu'}
                                sx={{ mx: 1, my: 1 }}
                            >
                                <MenuItem value="Wybierz typ pojazdu">
                                    Wybierz typ pojazdu
                                </MenuItem>
                                {Object.values(VEHICLE_TYPE).map((value) => (
                                    <MenuItem key={value} value={VEHICLE_TYPE[value]}>
                                        {value}
                                    </MenuItem>
                                ))}

                            </Select>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <Select
                                {...field}
                                {...register('name')}
                                error={!!errors?.name}
                                id="name"
                                value={field.value || 'Wybierz markę pojazdu'}
                                sx={{ mx: 1, my: 1 }}
                            >
                                <MenuItem value="Wybierz markę pojazdu" disabled>
                                    Wybierz markę pojazdu
                                </MenuItem>
                                {Object.values(VEHICLE_BRAND).map((value) => (
                                    <MenuItem key={value} value={VEHICLE_BRAND[value]}>
                                        {value}
                                    </MenuItem>
                                ))}

                            </Select>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="model"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <Select
                                {...field}
                                {...register('model')}
                                error={!!errors?.model}
                                id="model"
                                value={field.value || 'Wybierz model pojazdu'}
                                sx={{ mx: 1, my: 1 }}
                            >
                                <MenuItem value="Wybierz model pojazdu" disabled>
                                    Wybierz model pojazdu
                                </MenuItem>
                                {Object.values(VEHICLE_MODEL).map((value) => (
                                    <MenuItem key={value} value={VEHICLE_MODEL[value]}>
                                        {value}
                                    </MenuItem>
                                ))}

                            </Select>
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Controller
                        name="placeName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: {...field } }) => (
                            <Select
                                {...field}
                                {...register('placeName')}
                                error={!!errors?.model}
                                id="placeName"
                                value={field.value || 'Wybierz oddział'}
                                sx={{ mx: 1, my: 1 }}
                            >
                                <MenuItem value="Wybierz oddział" disabled>
                                    Wybierz oddział
                                </MenuItem>
                                <MenuItem value={'Łódź'}>Łódź</MenuItem>
                                <MenuItem value={'Warszawa'}>Warszawa</MenuItem>
                                <MenuItem value={'Lipno'}>Lipno</MenuItem>
                                <MenuItem value={'Leszno'}>Leszno</MenuItem>
                                <MenuItem value={'Lębork'}>Lębork</MenuItem>
                                <MenuItem value={'Lublin'}>Lublin</MenuItem>
                                <MenuItem value={'Kielce'}>Kielce</MenuItem>
                                <MenuItem value={'Zabrze'}>Zabrze</MenuItem>
                                <MenuItem value={'Tarnów'}>Tarnów</MenuItem>
                            </Select>
                        )}
                    />
                </Grid>

            </Grid>

            <Button type="submit" variant="contained" color="primary" sx={{mt: '10%'}}>
                    Dodaj pojazd
            </Button>


        </Box>
    );
};

