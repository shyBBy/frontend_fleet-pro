import React, {useState} from "react";
import {Button, Grid, Modal, Paper, Stack, Typography} from "@mui/material";
import {BasicInfo} from "./BasicInfo/BasicInfo";
import {TechnicalData} from "./TechnicalData/TechnicalData";
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/system";
import {grey} from "@mui/material/colors";
import {VehicleInspectionData} from "./VehicleInspectionData/VehicleInspectionData";
import {Changelog} from "../../../Dashboard/Changelog/Changelog";
import {VehicleCargoBoxSizes} from "./VehicleCargoBoxSizes/VehicleCargoBoxSizes";
import {VehicleSizes} from "./VehicleSizes/VehicleSizes";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {a11yProps, TabPanel} from "../../../TabPanel";
import {AddVehicleTechnicalDataForm} from "../../../Forms/AddVehicleTechnicalDataForm";
import {config} from "../../../../config/config";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {AddVehicleAvatarForm} from "../../../Forms/AddVehicleAvatarForm";


const AvatarUploadButton = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Button onClick={handleOpenModal} startIcon={<AddPhotoAlternateIcon fontSize={'small'}/>}>
                Wgraj zdjęcie
            </Button>
            <Modal open={openModal} onClose={handleCloseModal}>
                <AddVehicleAvatarForm closeModal={handleCloseModal}/>
            </Modal>
        </>
    );
};


export const MainContent = (props: any) => {
    const {vehicle} = props

    const [value, setValue] = React.useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Grid item xs={12} md={7} lg={2.5}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Zdjęcie</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10%'
                }}>
                    <Avatar
                        src={`${config.API_URL}/vehicle/photo/${vehicle.id}`}
                        sx={{width: 200, height: 200, border: `solid 4px`, borderColor: grey[300]}}
                        variant="rounded"
                    />
                    <Box p={1}>
                        <Stack direction={'row'}>
                            <Typography variant="body2" color="textSecondary" mr={1}>Oddział: </Typography>
                            <Typography variant="body2">{vehicle.placeName}</Typography>
                        </Stack>
                        <a href={'https://historiapojazdu.gov.pl'}><Typography variant="body2" color="textSecondary"
                                                                               mr={1}>Sprawdź pojazd w
                            CEPIKU</Typography></a>
                        <AvatarUploadButton/>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={9} mt={5}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Podstawowe infmormacje o pojeździe</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column',}}>
                    <BasicInfo vehicle={vehicle}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Box sx={{width: '100%'}}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label={<Typography variant="overline" noWrap>
                                        Dane techniczne
                                    </Typography>}  {...a11yProps(0)} />
                                    <Tab label={<Typography variant="overline" noWrap>
                                        Edytuj dane techniczne
                                    </Typography>} {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                    <TechnicalData data={vehicle.technicalData}/>
                                </Paper>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                    <AddVehicleTechnicalDataForm vehicle={vehicle}/>
                                </Paper>
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={5} lg={5} mt={8}>
                <Grid item xs={12} md={5} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="overline">Informacje dotyczące przeglądu pojazdu</Typography>
                        </Grid>
                    </Grid>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <VehicleInspectionData vehicle={vehicle}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="overline">Wymiary pojazdu</Typography>
                        </Grid>
                    </Grid>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <VehicleSizes vehicle={vehicle}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="overline">Wymiary kipy ładunkowej</Typography>
                        </Grid>
                    </Grid>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <VehicleCargoBoxSizes vehicle={vehicle}/>
                    </Paper>
                </Grid>

            </Grid>
            <Grid item xs={12} md={5} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="overline">Historia serwisowa</Typography>
                    </Grid>
                </Grid>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Changelog/>
                </Paper>
            </Grid>
        </>
    )
}