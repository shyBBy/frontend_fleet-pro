import {
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import React from "react";
import {data} from "../../../assets/data/lastChanges_data";
import FiberNewIcon from '@mui/icons-material/FiberNew';

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

export const DashboardLastChanges = () => {
    return (
        <>
            <List
                component="nav"
                sx={{
                    px: 0,
                    py: 0,
                    '& .MuiListItemButton-root': {
                        py: 1.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': {...actionSX, position: 'relative'}
                    }
                }}
            >
                {data.map((item) => (
                    <ListItemButton divider key={item.id}>
                        <ListItemAvatar>
                            <FiberNewIcon sx={{fontSize: 40, color: `grey`}}/>
                        </ListItemAvatar>
                        <ListItemText primary={<Typography variant="overline">{item.title}</Typography>}
                                      secondary={item.description}/>
                        <ListItemSecondaryAction>
                            <Stack alignItems="flex-end">
                                <Typography variant="overline" noWrap>
                                    Data:
                                </Typography>
                                <Typography variant="h6" color="secondary" noWrap>
                                    {item.date}
                                </Typography>
                            </Stack>
                        </ListItemSecondaryAction>
                    </ListItemButton>

                ))}
            </List>
        </>
    )
}