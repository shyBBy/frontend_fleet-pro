import {
    Badge, Divider, IconButton, List,
    Toolbar, Typography, Button, Tooltip, Avatar, Box, MenuItem, Menu
} from "@mui/material";
import React, { useContext } from "react";
import {AppBar, Drawer, MobileViewContext} from "../../context/MobileViewContext";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../../assets/img/logoLetter.png'
import './AppBarMobileView.css'
import {AppBarMobileViewNavigationList} from "./AppBarMobileViewNavigationList";
import { useAuth } from "../../hooks/useAuth";
import avatar from '../../assets/img/1.jpg';



export const AppBarMobileView = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const {user, signOut} = useAuth()

    const checkUserDataTest = () => {

        console.log(typeof user)
        console.log('TEST')
        console.log(user?.id)
    }



    const context = useContext(MobileViewContext);

    if(!context) return null;

    const {drawerSideBarWidth, handleDrawerToggleSideBar, mobileOpenSideBar} = context;

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return(


        <>
            <AppBar position="absolute" color="default"  open={mobileOpenSideBar}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggleSideBar}
                        sx={{
                            marginRight: '36px',
                            ...(mobileOpenSideBar && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img style={{
                        height: 40,
                    }} src={Logo}/>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        FleetPRO
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Typography
                        component="p"
                        variant="subtitle2"
                        >
                        </Typography>
                        {user ? `nie ma uzytkownika: ${user}` : `jest uzytkownik: ${user}` }
                        <Button onClick={checkUserDataTest}>Sprawdz dane</Button>
                                <Avatar alt={user?.name} src={avatar} />
                                <Menu open={isMenuOpen} onClose={handleMenuClose}>
                                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                </Menu>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={mobileOpenSideBar}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={handleDrawerToggleSideBar}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <AppBarMobileViewNavigationList/>
                </List>
            </Drawer>
        </>
    )
}