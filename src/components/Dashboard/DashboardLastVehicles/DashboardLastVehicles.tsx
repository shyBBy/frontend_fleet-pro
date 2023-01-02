import React from "react";

import { GiftOutlined} from '@ant-design/icons';

import {
    Avatar, List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import { data } from "../../../assets/data/lastAddedVehicles_data";


// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

export const DashboardLastVehicles = () => {
    return(
        <>
            <List
                component="nav"
                sx={{
                    px: 0,
                    py: 0,
                    '& .MuiListItemButton-root': {
                        py: 1.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                    }
                }}
            >
                {data.map((item) => (
                    <ListItemButton divider>
                        <ListItemAvatar>
                            <Avatar
                                sx={{
                                    color: 'success.main',
                                    bgcolor: 'success.lighter'
                                }}
                            >
                                <GiftOutlined />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="subtitle1">{item.model}</Typography>} secondary={item.registerNumber} />
                        <ListItemSecondaryAction>
                            <Stack alignItems="flex-end">
                                <Typography variant="subtitle1" noWrap>
                                    Oddział:
                                </Typography>
                                <Typography variant="h6" color="secondary" noWrap>
                                    {item.assignedToPlace}
                                </Typography>
                            </Stack>
                        </ListItemSecondaryAction>
                    </ListItemButton>

                ))}
            </List>
        </>
    )
}