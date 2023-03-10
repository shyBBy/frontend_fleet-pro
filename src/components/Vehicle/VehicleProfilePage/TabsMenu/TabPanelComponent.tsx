import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {a11yProps, TabPanel} from "../../../TabPanel";
import {VehicleProfilePageBasicInfo} from "../../../../pages/Vehicle/VehicleProfilePageBasicInfo";

export const TabPanelComponent = (props: any) => {
    const {vehicle} = props
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    return(

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center' }} pt={2}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Główne informacje" {...a11yProps(0)} />
                            <Tab label="Edytuj" {...a11yProps(1)} />
                            <Tab label="Historia zmian" { ...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <VehicleProfilePageBasicInfo vehicle={vehicle} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    edycja
                </TabPanel>
                <TabPanel value={value} index={2}>
                    historia zmian
                </TabPanel>

            </Box>
    )
}