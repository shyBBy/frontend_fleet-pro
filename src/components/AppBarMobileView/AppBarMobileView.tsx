import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    List,
    Menu,
    MenuItem,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import React, {useContext} from "react";
import {AppBar, Drawer, MobileViewContext} from "../../context/MobileViewContext";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../../assets/img/logoLetter.png'
import './AppBarMobileView.css'
import {AppBarMobileViewNavigationList} from "./AppBarMobileViewNavigationList";
import {useAuth} from "../../hooks/useAuth";
import avatar from '../../assets/img/1.jpg';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";


export const AppBarMobileView = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


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
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const {user, signOut} = useAuth()


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
                    <Tooltip title="Opcje">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                 <MenuItem key='profile' onClick={handleCloseUserMenu}>
                 <Link to={`/user/${user?.id}`}>
                  <Typography textAlign="center">Profil użytkownika</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key='logout' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Button onClick={signOut}><PowerSettingsNewIcon/></Button></Typography>
                </MenuItem>
             
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