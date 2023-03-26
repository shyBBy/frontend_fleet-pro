import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {AddVehicleTechnicalData} from "../../schemas/schema";
import {config} from "../../config/config";
import {toast} from "react-toastify";
import {Box, Button, Grid, TextField} from "@mui/material";


const defaultValues = {
    engineCapacity: '',
    enginePower: '',
    fuel: '',
    alternativeFuel: '',
    CO2Emission: '',
    avgFuelConsumption: '',
    totalSeats: '',
    seatedSeats: '',
    vehicleWeight: '',
    maxTrailerWeightWithBrakes: '',
    maxTrailerWeightWithoutBrakes: '',
    payload: '',
    grossWeight: '',
    numberOfAxles: '',
    axleSpacing: '',
    wheelSpacing: '',
    maxAxleLoad: '',
}



export const AddVehicleTechnicalDataForm = (props: any) => {

    const {vehicle} = props

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: {errors, isSubmitSuccessful},
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(AddVehicleTechnicalData),
        defaultValues: defaultValues,
    });

    const onSubmit = async (data: any) => {
        try {
            const res = await fetch(`${config.API_URL}/vehicle/${vehicle.id}/techdata/add`, {
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
                toast.success(`Pomyślnie dodano dane`, {
                    position: "bottom-right",
                    theme: "light",
                    autoClose: 1500,
                })
                navigate(`/vehicle/${vehicle.id}`)
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

    return (
        <>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="engineCapacity"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="engineCapacity"
                                    label="Pojemność silnika"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('engineCapacity')}
                                    error={!!errors?.engineCapacity}
                                    helperText={errors['engineCapacity'] ? errors['engineCapacity'].message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="enginePower"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="enginePower"
                                    label="Moc silnika"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('enginePower')}
                                    error={!!errors?.enginePower}
                                    helperText={errors['enginePower'] ? errors['enginePower'].message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="fuel"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="fuel"
                                    label="Paliwo"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('fuel')}
                                    error={!!errors?.fuel}
                                    helperText={errors['fuel'] ? errors['fuel'].message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="alternativeFuel"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="alternativeFuel"
                                    label="Paliwo alternatywne"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('alternativeFuel')}
                                    error={!!errors?.alternativeFuel}
                                    helperText={errors['alternativeFuel'] ? errors['alternativeFuel'].message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="CO2Emission"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="CO2Emission"
                                    label="Emisja CO₂"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('CO2Emission')}
                                    error={!!errors?.CO2Emission}
                                    helperText={errors['CO2Emission'] ? errors['CO2Emission'].message : ''}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Grid item>

                            <Controller
                                name="avgFuelConsumption"
                                control={control}
                                rules={{required: true}}
                                render={({field: {...field}}) => (
                                    <TextField
                                        {...field}
                                        id="avgFuealConsumption"
                                        type="text"
                                        variant="standard"
                                        required
                                        fullWidth
                                        autoComplete="off"
                                        label='Średnie zużycie paliwa'
                                        sx={{mx: 1, my: 1}}
                                        {...register('avgFuelConsumption')}
                                        error={!!errors?.avgFuelConsumption}
                                        helperText={errors['avgFuelConsumption'] ? errors['avgFuelConsumption'].message : ''}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="totalSeats"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="totalSeats"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    label='Liczba miejsc ogółem'
                                    sx={{mx: 1, my: 1}}
                                    {...register('totalSeats')}
                                    error={!!errors?.totalSeats}
                                    helperText={errors['totalSeats'] ? errors['totalSeats'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="seatedSeats"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="seatedSeats"
                                    label="Liczba miejsc siedzących"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('seatedSeats')}
                                    error={!!errors?.seatedSeats}
                                    helperText={errors['seatedSeats'] ? errors['seatedSeats'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="vehicleWeight"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="vehicleWeight"
                                    label="Masa własna pojazdu"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('vehicleWeight')}
                                    error={!!errors?.vehicleWeight}
                                    helperText={errors['vehicleWeight'] ? errors['vehicleWeight'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="maxTrailerWeightWithBrakes"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="maxTrailerWeightWithBrakes"
                                    label="Maks. masa całkowita ciągniętej przyczepy z hamulcem"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('maxTrailerWeightWithBrakes')}
                                    error={!!errors?.seatedSeats}
                                    helperText={errors['maxTrailerWeightWithBrakes'] ? errors['maxTrailerWeightWithBrakes'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="maxTrailerWeightWithoutBrakes"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="maxTrailerWeightWithoutBrakes"
                                    label="Maks. masa całkowita ciągniętej przyczepy bez hamulca"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('maxTrailerWeightWithoutBrakes')}
                                    error={!!errors?.maxTrailerWeightWithoutBrakes}
                                    helperText={errors['maxTrailerWeightWithoutBrakes'] ? errors['maxTrailerWeightWithoutBrakes'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="payload"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="payload"
                                    label="Dopuszczalna ładowność"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('payload')}
                                    error={!!errors?.payload}
                                    helperText={errors['payload'] ? errors['payload'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="grossWeight"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="grossWeight"
                                    label="Dopuszczalna masa całkowita"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('grossWeight')}
                                    error={!!errors?.grossWeight}
                                    helperText={errors['grossWeight'] ? errors['grossWeight'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="numberOfAxles"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="numberOfAxles"
                                    label="Liczba osi"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('numberOfAxles')}
                                    error={!!errors?.numberOfAxles}
                                    helperText={errors['numberOfAxles'] ? errors['numberOfAxles'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="axleSpacing"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="axleSpacing"
                                    label="Rozstaw osi"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('axleSpacing')}
                                    error={!!errors?.axleSpacing}
                                    helperText={errors['axleSpacing'] ? errors['axleSpacing'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="wheelSpacing"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="wheelSpacing"
                                    label="Rozstaw kół (średni)"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('wheelSpacing')}
                                    error={!!errors?.wheelSpacing}
                                    helperText={errors['wheelSpacing'] ? errors['wheelSpacing'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="maxAxleLoad"
                            control={control}
                            rules={{required: true}}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="maxAxleLoad"
                                    label="Maksymalny nacisk na oś"
                                    type="text"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('maxAxleLoad')}
                                    error={!!errors?.maxAxleLoad}
                                    helperText={errors['maxAxleLoad'] ? errors['maxAxleLoad'].message : ''}
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Button type="submit" variant="contained" color="primary" sx={{mt: '5%'}}>
                    Dodaj dane techniczne
                </Button>


            </Box>
        </>
    )
}