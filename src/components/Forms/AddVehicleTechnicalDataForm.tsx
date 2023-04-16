import React from "react";
import {useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {AddVehicleTechnicalData} from "../../schemas/schema";
import {config} from "../../config/config";
import {toast} from "react-toastify";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {ErrorMessage} from "@hookform/error-message";


export const AddVehicleTechnicalDataForm = (props: any) => {

    const {vehicle, data} = props

    const technicalData = data[0]

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(AddVehicleTechnicalData),
        // defaultValues: defaultValues,
    });

    const onSubmit = async (data: any) => {
        console.log('Dane z form', data)
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


    return (
        <>
            <Typography>Dane należy wpisywać bez podawania jednostek miary. Dodawane są one automatycznie! Wymiary pojazdu w cm.</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="engineCapacity"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="engineCapacity"
                                    label="Pojemność silnika (cm)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('engineCapacity')}
                                    error={!!errors?.engineCapacity}
                                    defaultValue={technicalData.engineCapacity}
                                    helperText={<ErrorMessage errors={errors} name='engineCapacity'/>}
                                />

                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="enginePower"
                            control={control}
                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="enginePower"
                                    label="Moc silnika (kW)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('enginePower')}
                                    error={!!errors?.enginePower}
                                    defaultValue={technicalData.enginePower}
                                    helperText={<ErrorMessage errors={errors} name='enginePower'/>}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="fuel"
                            control={control}

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
                                    defaultValue={technicalData.fuel}
                                    helperText={<ErrorMessage errors={errors} name='fuel'/>}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="alternativeFuel"
                            control={control}

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
                                    defaultValue={technicalData.alternativeFuel}
                                    helperText={<ErrorMessage errors={errors} name='alternativeFuel'/>}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="CO2Emission"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="CO2Emission"
                                    label="Emisja CO₂ (g/km)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('CO2Emission')}
                                    error={!!errors?.CO2Emission}
                                    defaultValue={technicalData.CO2Emission}
                                    helperText={<ErrorMessage errors={errors} name='CO2Emission'/>}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} md={8} lg={3}>
                        <Grid item>

                            <Controller
                                name="avgFuelConsumption"
                                control={control}

                                render={({field: {...field}}) => (
                                    <TextField
                                        {...field}
                                        id="avgFuealConsumption"
                                        type="number"
                                        variant="standard"
                                        required
                                        fullWidth
                                        autoComplete="off"
                                        label='Średnie zużycie paliwa (L)'
                                        sx={{mx: 1, my: 1}}
                                        {...register('avgFuelConsumption')}
                                        error={!!errors?.avgFuelConsumption}
                                        defaultValue={technicalData.avgFuelConsumption}
                                        helperText={<ErrorMessage errors={errors} name='avgFuealConsumption'/>}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="totalSeats"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="totalSeats"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    label='Liczba miejsc ogółem'
                                    sx={{mx: 1, my: 1}}
                                    {...register('totalSeats')}
                                    error={!!errors?.totalSeats}
                                    defaultValue={technicalData.totalSeats}
                                    helperText={<ErrorMessage errors={errors} name='totalSeats'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="seatedSeats"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="seatedSeats"
                                    label="Liczba miejsc siedzących"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('seatedSeats')}
                                    error={!!errors?.seatedSeats}
                                    defaultValue={technicalData.seatedSeats}
                                    helperText={<ErrorMessage errors={errors} name='seatedSeats'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="vehicleWeight"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="vehicleWeight"
                                    label="Masa własna pojazdu (kg)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('vehicleWeight')}
                                    error={!!errors?.vehicleWeight}
                                    defaultValue={technicalData.vehicleWeight}
                                    helperText={<ErrorMessage errors={errors} name='vehicleWeight'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="maxTrailerWeightWithBrakes"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="maxTrailerWeightWithBrakes"
                                    label="Maks. masa całkowita ciągniętej przyczepy z hamulcem (kg)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('maxTrailerWeightWithBrakes')}
                                    error={!!errors?.seatedSeats}
                                    defaultValue={technicalData.maxTrailerWeightWithBrakes}
                                    helperText={<ErrorMessage errors={errors} name='maxTrailerWeightWithBrakes'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="maxTrailerWeightWithoutBrakes"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="maxTrailerWeightWithoutBrakes"
                                    label="Maks. masa całkowita ciągniętej przyczepy bez hamulca (kg)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('maxTrailerWeightWithoutBrakes')}
                                    error={!!errors?.maxTrailerWeightWithoutBrakes}
                                    defaultValue={technicalData.maxTrailerWeightWithoutBrakes}
                                    helperText={<ErrorMessage errors={errors} name='maxTrailerWeightWithoutBrakes'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="payload"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="payload"
                                    label="Dopuszczalna ładowność (kg)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('payload')}
                                    error={!!errors?.payload}
                                    defaultValue={technicalData.payload}
                                    helperText={<ErrorMessage errors={errors} name='payload'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="grossWeight"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="grossWeight"
                                    label="Dopuszczalna masa całkowita (kg)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('grossWeight')}
                                    error={!!errors?.grossWeight}
                                    defaultValue={technicalData.grossWeight}
                                    helperText={<ErrorMessage errors={errors} name='grossWeight'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="numberOfAxles"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="numberOfAxles"
                                    label="Liczba osi"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('numberOfAxles')}
                                    error={!!errors?.numberOfAxles}
                                    defaultValue={technicalData.numberOfAxles}
                                    helperText={<ErrorMessage errors={errors} name='numberOfAxles'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="axleSpacing"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="axleSpacing"
                                    label="Rozstaw osi (mm)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('axleSpacing')}
                                    error={!!errors?.axleSpacing}
                                    defaultValue={technicalData.axleSpacing}
                                    helperText={<ErrorMessage errors={errors} name='axleSpacing'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="wheelSpacing"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="wheelSpacing"
                                    label="Rozstaw kół (średni) (mm)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('wheelSpacing')}
                                    error={!!errors?.wheelSpacing}
                                    defaultValue={technicalData.wheelSpacing}
                                    helperText={<ErrorMessage errors={errors} name='wheelSpacing'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="maxAxleLoad"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="maxAxleLoad"
                                    label="Maksymalny nacisk na oś (kN)"
                                    type="number"
                                    variant="standard"
                                    required
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('maxAxleLoad')}
                                    error={!!errors?.maxAxleLoad}
                                    defaultValue={technicalData.maxAxleLoad}
                                    helperText={<ErrorMessage errors={errors} name='maxAxleLoad'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="vehicleWidth"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="vehicleWidth"
                                    label="Szerokość pojazdu (cm)"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('vehicleWidth')}
                                    error={!!errors?.vehicleWidth}
                                    defaultValue={technicalData.vehicleWidth}
                                    helperText={<ErrorMessage errors={errors} name='vehicleWidth'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="vehicleLenght"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="vehicleLenght"
                                    label="Długość pojazdu (cm)"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('vehicleLenght')}
                                    error={!!errors?.vehicleLenght}
                                    defaultValue={technicalData.vehicleLenght}
                                    helperText={<ErrorMessage errors={errors} name='vehicleLenght'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="vehicleHeight"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="vehicleHeight"
                                    label="Wysokość pojazdu (cm)"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('vehicleHeight')}
                                    error={!!errors?.vehicleHeight}
                                    defaultValue={technicalData.vehicleHeight}
                                    helperText={<ErrorMessage errors={errors} name='vehicleHeight'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="cargoBedWidth"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="cargoBedWidth"
                                    label="Szerokość kipy ładunkowej (cm)"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('cargoBedWidth')}
                                    error={!!errors?.cargoBedWidth}
                                    defaultValue={technicalData.cargoBedWidth}
                                    helperText={<ErrorMessage errors={errors} name='cargoBedWidth'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="cargoBedLenght"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="cargoBedLenght"
                                    label="Długość kipy ładunkowej (cm)"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('cargoBedLenght')}
                                    error={!!errors?.cargoBedLenght}
                                    defaultValue={technicalData.cargoBedLenght}
                                    helperText={<ErrorMessage errors={errors} name='cargoBedLenght'/>}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={3}>
                        <Controller
                            name="cargoBedHeight"
                            control={control}

                            render={({field: {...field}}) => (
                                <TextField
                                    {...field}
                                    id="cargoBedHeight"
                                    label="Wysokość kipy ładunkowej (cm)"
                                    type="number"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                    sx={{mx: 1, my: 1}}
                                    {...register('cargoBedHeight')}
                                    error={!!errors?.cargoBedHeight}
                                    defaultValue={technicalData.cargoBedHeight}
                                    helperText={<ErrorMessage errors={errors} name='cargoBedHeight'/>}
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