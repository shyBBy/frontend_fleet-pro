import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    email: yup.string().email(`E-mail musi zawierać w nazwie '@'`).required('E-mail jest wymagany.'),
    password: yup.string().min(8, `Hasło musi być dłuższe niż '8' znaków.`).required('Hasło jest wymagane.')
})


export const createVehicleSchema = yup.object().shape({
    vehicleType: yup.string().oneOf(['Osobowy', 'Dostawczy', 'inny'], 'Niepoprawny typ pojazdu.').required('Typ pojazdu jest wymagany.'),
    name: yup.string().oneOf(['Mercedes', 'Renault', 'Opel', 'Nissan', 'Mazda', 'Porsche', 'Kia', 'Volkswagen', 'Ford', 'Inne'], 'Niepoprawna marka pojazdu.').required('Marka pojazdu jest wymagana.'),
    model: yup.string().oneOf(['Sprinter', 'Master', 'Ceed', 'Insignia', 'Golf', 'Koleos', 'Optima', 'Cayenne', 'Inne'], 'Niepoprawny model pojazdu.').required('Model pojazdu jest wymagany.'),
    registerNumber: yup.string().min(3, `Numer rejestracyjny musi posiadać minimum 3 znaki`).max(8, 'Maksymalna iloć znakow w numerze rejestracyjnym wynosi 8.').required('Numer rejestracyjny pojazdu jest wymagany.'),
    lastDateOfVehicleInspection: yup.date().required('Data ostatniego badania technicznego jest wymagana.'),
    nextDateOfVehicleInspection: yup.date().required('Data następnego badania technicznego jest wymagana.'),
    photo: yup.string(),
    vinNumber: yup.string().min(16, `Vin jest zbyt krótki.`).required('Numer VIN jest wymagany.'),
    yearOfProduction: yup.string().required('Rok produkcji jest wymagany.'),
    firstRegistrationDate: yup.string().required('Data pierwszej rejestracji jest wymagana.'),
    policyNumber: yup.string().required('Numer polisy jest wymagany.'),
    placeName: yup.string().oneOf(['Łódź', 'Warszawa', 'Lipno', 'Leszno', 'Lębork', 'Lublin', 'Kielce', 'Zabrze', 'Tarnów'], 'Niepoprawna nazwa oddziału firmy.').required('Nazwa oddziału jest wymagana.')
})