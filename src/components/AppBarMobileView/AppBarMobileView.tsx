import {Badge, Divider, IconButton, List,
    Toolbar,Typography, Button} from "@mui/material";
import React, { useContext } from "react";
import {AppBar, Drawer, MobileViewContext} from "../../context/MobileViewContext";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../../assets/img/logoLetter.png'
import './AppBarMobileView.css'
import {AppBarMobileViewNavigationList} from "./AppBarMobileViewNavigationList";
import { useAuth } from "../../hooks/useAuth";



export const AppBarMobileView = () => {
  
  
    const {user} = useAuth()
    const handleLogout = async (data: any) => {
        try {
          const res = await fetch("http://localhost:3002/auth/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          return res.json().then((data) => {
            console.log(data.message); 

            return data; 
          });
        } catch (error) {
          console.log(error);
        }
      };


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
                    
                    {user ? <Button onClick={handleLogout} >Wyloguj</Button> : ''
                    }
                    
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
                    <AppBarMobileViewNavigationList/>
                </List>
            </Drawer>
        </>
    )
}