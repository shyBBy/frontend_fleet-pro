import React from "react";
import {Box, Container, Grid, Modal} from "@mui/material";
import {CreateVehicleForm} from "../Forms/CreateVehicleForm";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `50vw`,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flexGrow: 1,
};

export const VehicleAddContainer = (props: any) => {
    const {open, handleOpen, setOpen} = props
    const handleClose = () => setOpen(false);
    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <CreateVehicleForm/>
                        </Grid>
                    </Container>
                </Box>
            </Modal>
        </>
    )
}