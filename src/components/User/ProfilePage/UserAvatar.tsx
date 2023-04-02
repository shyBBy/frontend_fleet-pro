import React, {useState} from 'react'
import {Button, Grid, Modal, Paper, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import {Box} from "@mui/system";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {AddUserAvatarForm} from "../../Forms/AddUserAvatarForm";

interface Props {
    name: string;
    surname: string;
    position: string;
    avatarUrl: string;

};

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
            <Button onClick={handleOpenModal} startIcon={<AddPhotoAlternateIcon fontSize={'small'} />}>
                Zmień avatar
            </Button>
            <Modal open={openModal} onClose={handleCloseModal}>
                <AddUserAvatarForm closeModal={handleCloseModal}/>
            </Modal>
        </>
    );
};

export const UserAvatar: React.FC<Props> = (props: any) => {
    const {name, surname, position, avatarUrl, user} = props


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
                        <AvatarUploadButton/>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}