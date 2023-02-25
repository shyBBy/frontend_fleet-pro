import React from 'react'
import {Avatar, Box, Grid, Paper, Tooltip, Typography} from "@mui/material";
import {StackListInformation} from "../../components/Vehicle/VehicleProfilePage/Main/StackListInformation";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



//IconS:
import PlateNumberIcon  from '../../assets/icons/license-plate.png';
import LastDateInspectionIcon  from '../../assets/icons/arrows.png';
import NextDateInspectionIcon  from '../../assets/icons/next-week.png';
import VehicleInsuranceIcon from '../../assets/icons/car-insurance.png';
import VinNumberIcon from '../../assets/icons/searching.png';
import FirstDateRegistrationIcon  from '../../assets/icons/calendar.png';
import YearOfProductionIcon  from '../../assets/icons/car-loan.png';
import InspectionOkIcon  from '../../assets/icons/validate.png';
import InspectionValidIcon  from '../../assets/icons/cross.png';
import InspectionComeIcon  from '../../assets/icons/booking-pending-icon.svg';
import MileageIcon  from '../../assets/icons/distance.png';
import ModelIcon from '../../assets/icons/car.png'
import BrandIcon from '../../assets/icons/clipboard.png'



import {VehicleInspection} from "../../helpers/VehicleInspection.helper";
import {red} from "@mui/material/colors";
import {imageData} from "../../assets/data/imageListTemplate_data";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
        size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export const VehicleProfilePageBasicInfo = (props: any) => {
  const {vehicle} = props;

  const isValidInspection = VehicleInspection.checkIsValid(vehicle.lastDateOfVehicleInspection, vehicle.nextDateOfVehicleInspection)
  
  return(
    <>
      <Grid container spacing={3}>
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        {/* row 2 */}
        <Grid item xs={12} md={7} lg={2.5}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10%' }}>
            <Avatar
                src={vehicle.photo}
                sx={{ width: 200, height: 200, border: `solid 4px`, borderColor: `#D8DEE9` }}
                variant="rounded"
            />
          </Paper>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="overline">Podstawowe informacje</Typography>
            <Box p={1}>
              <StackListInformation description={vehicle.name} icon={BrandIcon} tooltip={'Marka pojazdu'}/>
              <StackListInformation description={vehicle.model} icon={ModelIcon} tooltip={'Model pojazdu'}/>
              <StackListInformation description={vehicle.registerNumber} icon={PlateNumberIcon} tooltip={'Numer rejestracyjny'}/>
              <StackListInformation description={isValidInspection ? 'Przegląd aktualny' : 'Brak przeglądu'} icon={isValidInspection ? InspectionOkIcon : InspectionValidIcon } tooltip={'Ważność przeglądu technicznego'}/>
              <StackListInformation description={VehicleInspection.convertToOnlyDate(vehicle.lastDateOfVehicleInspection)} icon={LastDateInspectionIcon} tooltip={'Ostatnia data przeglądu'}/>
              <StackListInformation description={VehicleInspection.convertToOnlyDate(vehicle.nextDateOfVehicleInspection)} icon={NextDateInspectionIcon} tooltip={'Następna data przeglądu'}/>
              <StackListInformation description={vehicle.vehicleMileage} icon={MileageIcon} tooltip={'Przejechane kilometry'}/>
              <StackListInformation description={vehicle.vinNumber} icon={VinNumberIcon} tooltip={'Numer VIN'}/>
              <StackListInformation description={vehicle.yearOfProduction} icon={YearOfProductionIcon} tooltip={'Rok produkcji'}/>
              <StackListInformation description={vehicle.firstRegistrationDate} icon={FirstDateRegistrationIcon} tooltip={'Pierwsza rejestracja'}/>
              <StackListInformation description={vehicle.policyNumber} icon={VehicleInsuranceIcon} tooltip={'Numer polisy'}/>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={8}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginBottom: '3%' }}>
            <Typography variant="body1">Tytuł sekcji</Typography>
            dupa
          </Paper>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1">Galeria</Typography>
            <ImageList
                sx={{ width: 'auto', height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
              {imageData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                  </ImageListItem>
              ))}
            </ImageList>
          </Paper>
        </Grid>
      </Grid>
    </>
    )
}