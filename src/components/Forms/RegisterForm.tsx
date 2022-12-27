import React, { useEffect } from 'react';
import { useForm , Controller} from 'react-hook-form';
import {TextField, Button, Box, Grid, Link, FormControlLabel, FormGroup, FormHelperText} from '@mui/material'

export const RegisterForm = () => {
    const {
        control,
        handleSubmit,
        reset,
        register,
        formState: { errors, isSubmitSuccessful },
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

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field: {...field } }) => (
                <TextField
                    {...field}
                    id="email"
                    label="Adres e-mail"
                    type="text"
                    variant="standard"
                    required
                    fullWidth
                    autoComplete="off"
                    sx={{ mx: 1, my: 1 }}
                    error={!!errors['email']}
                    helperText={errors['email'] ? errors['email'].message : 'Podaj adres e-mail'}
                    {...register('email')}
                />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                <TextField
                    {...field}
                    id="password"
                    label="Hasło"
                    type="password"
                    variant="standard"
                    required
                    fullWidth
                    autoComplete="off"
                    sx={{ mx: 1, my: 1 }}
                    error={!!errors['password']}
                    helperText={errors['password'] ? errors['password'].message : 'Podaj hasło'}
                    {...register('password')}
                />
                )}
            />
        </Grid>
      </Grid>

      {/* https://codevoweb.com/form-validation-react-hook-form-material-ui-react/ */}
      <Button type="submit" variant="contained" color="primary">
            Zarejestruj się
        </Button>
        <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Masz już konto? Zaloguj się
                </Link>
              </Grid>
            </Grid>
          
    </Box>
  );
};

