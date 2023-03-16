import React from "react";
import {IconButton, ListItem, ListItemText} from "@mui/material";
import {List} from "@mui/icons-material";

export const TechnicalData = (props: any) => {
    const {vehicle} = props
    return(
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                dd
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Line item dsa sas sd sadsa `} />
                    </ListItem>
            </List>
        </>
    )
}