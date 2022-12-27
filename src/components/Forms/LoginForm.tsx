import React, { useEffect } from 'react';
import { useForm , Controller} from 'react-hook-form';
import {TextField, Button, Box, Grid, Link} from '@mui/material'
import { Copyright } from '../../layouts/MainLayout';

export const LoginForm = () => {
    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: { isSubmitSuccessful },
      } = useForm({
        defaultValues: {
          email: "",
          password: '',
        },
      });

      const onSubmit = async (data: any) => {
        console.log(data);
        try {
          const res = await fetch("http://localhost:3002/account/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          return res.json().then((data) => {
            console.log(data.message); 
            return data; 
          });
        } catch (error) {
          console.log(error);
        }
      };


      useEffect(() => {
        if (isSubmitSuccessful) {
          reset({ email: "", password: '', });
        }
      }, [isSubmitSuccessful, reset]);


    return(
        <>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: {...field } }) => (
                <TextField
                    {...field}
                    margin="normal"
                    id="email"
                    label="Adres e-mail"
                    type="text"
                    variant="standard"
                    required
                    fullWidth
                    autoComplete="email"
                    sx={{ mx: 1, my: 1 }}
                />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: {...field } }) => (
                <TextField
                    {...field}
                    margin="normal"
                    id="password"
                    label="Hasło"
                    type="text"
                    variant="standard"
                    required
                    fullWidth
                    autoComplete="current-password"
                    sx={{ mx: 1, my: 1 }}
                />
                )}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Zaloguj
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Zapomniałeś hasła?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Nie masz konta? Zarejestruj się"}
                        </Link>
                    </Grid>
                </Grid>
                <Box p={10}>
                    <Copyright/>
                </Box>
            </Box>
        </>
    )
}

