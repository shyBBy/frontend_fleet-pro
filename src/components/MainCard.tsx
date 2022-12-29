import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Chip, Stack} from "@mui/material";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const MainCard = (props: any) => {

    const {title, count, color, direction, spacing, variant} = props;

    return(
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                    <Stack direction={direction} spacing={spacing}>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Chip label="primary" color="primary" sx={{width: '25%'}} />
                    </Stack>

                </CardContent>
            </Card>
        </>
    )
}