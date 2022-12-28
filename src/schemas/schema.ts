import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    email: yup.string().email(`E-mail musi zawierać w nazwie '@'`).required('E-mail jest wymagany.'),
    password: yup.string().min(8, `Hasło musi być dłuższe niż '8' znaków.`).required('Hasło jest wymagane.')
})