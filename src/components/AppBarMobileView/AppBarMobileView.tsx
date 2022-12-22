import {Badge, Box, Divider, IconButton, List, ListItemButton,
    ListItemIcon, ListItemText, Toolbar, Tooltip, Typography, useTheme} from "@mui/material";
import React, { useContext } from "react";
import {AppBar, Drawer, MobileViewContext} from "../../context/MobileViewContext";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {navigationItems} from "../../config/navigation";
import Logo from '../../assets/img/logoLetter.png'
import {Link, useLocation, useNavigate} from "react-router-dom";
import './AppBarMobileView.css'



export const AppBarMobileView = () => {

    const location = useLocation()
    const navigation = useNavigate()


    const context = useContext(MobileViewContext);

    if(!context) return null;

    const {drawerSideBarWidth, handleDrawerToggleSideBar, mobileOpenSideBar} = context;

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
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
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
                    {
                        navigationItems.main.map((item) => (
                            <ListItemButton>
                                <ListItemIcon>
                                    <Link key={item.text}
                                          to={item.to}
                                          className={
                                              location.pathname.includes(item.to) ? "active" : "inactive"
                                          }>
                                        <i className={item.icon} style={{textAlign: 'center'}}></i>
                                    </Link>
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))
                    }
                    <Divider sx={{ my: 1 }} />
                    <p>ddsad</p>
                </List>
            </Drawer>
        </>
    )
}