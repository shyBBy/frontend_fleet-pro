import React from 'react'
import {Grid, Paper, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/system";


interface Props {
    name: string;
    surname: string;
    position: string;
    avatarUrl: string;

};

export const UserAvatar: React.FC<Props> = ({name, surname, position, avatarUrl}) => {


    return (
        <>
            <Grid item xs={12} md={7} lg={2.5}>
                <Paper
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10%",
                    }}
                >
                    <Avatar
                        alt={`${name} ${surname}`}
                        src={avatarUrl}
                        sx={{width: 200, height: 200 ,border: `solid 4px`, borderColor: grey[300], borderRadius: "50%"}}
                        variant="rounded"
                    />
                    <Box p={1}>
                        <Typography variant="h5" sx={{textAlign: "center",}}>
                            {name} {surname}
                        </Typography>
                        <Typography variant="subtitle1" sx={{textAlign: "center",}}>
                            {position}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}