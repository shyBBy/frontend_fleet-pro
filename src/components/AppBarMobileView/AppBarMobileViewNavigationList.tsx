import React from 'react'
import {Divider, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BusinessIcon from "@mui/icons-material/Business";
import SettingsIcon from "@mui/icons-material/Settings";



export const AppBarMobileViewNavigationList = () => {

    const location = useLocation()
    const navigation = useNavigate()
    return(
        <React.Fragment>
            <ListItemButton>
                <Link key='Dashboard'
                      to='/dashboard'
                >
                    <ListItemIcon>
                        <DashboardIcon className={
                            location.pathname.includes('/dashboard') ? "active" : "inactive"
                        } />
                    </ListItemIcon>
                </Link>
                <Link key='dashboard'
                      to='/dashboard'
                      className={
                          location.pathname.includes('/dashboard') ? "active" : "inactive"
                      }
                >
                    <ListItemText primary="Dashboard" />
                </Link>
            </ListItemButton>

            <ListItemButton>
                <Link key='Employees'
                      to='/employees'
                >
                    <ListItemIcon>
                        <PeopleAltIcon className={
                            location.pathname.includes('/employees') ? "active" : "inactive"
                        } />
                    </ListItemIcon>
                </Link>
                <Link key='employees'
                      to='/employees'
                      style={{textDecoration: 'none'}}
                      className={
                          location.pathname.includes('/employees') ? "active" : "inactive"
                      }>
                    <ListItemText primary="Pracownicy" />
                </Link>
            </ListItemButton>

            <ListItemButton>
                <Link key='Vehicles'
                      to='/vehicles'
                >
                    <ListItemIcon>
                        <TimeToLeaveIcon className={
                            location.pathname.includes('/vehicles') ? "active" : "inactive"
                        } />
                    </ListItemIcon>
                </Link>
                <Link key='vehicles'
                      to='/vehicles'
                      style={{textDecoration: 'none'}}
                      className={
                          location.pathname.includes('/vehicles') ? "active" : "inactive"
                      }>
                    <ListItemText primary="Pojazdy" />
                </Link>
            </ListItemButton>

            <ListItemButton>
                <Link key='Places'
                      to='/places'
                >
                    <ListItemIcon>
                        <BusinessIcon className={
                            location.pathname.includes('/places') ? "active" : "inactive"
                        } />
                    </ListItemIcon>
                </Link>
                <Link key='places'
                      to='/places'
                      style={{textDecoration: 'none'}}
                      className={
                          location.pathname.includes('/places') ? "active" : "inactive"
                      }>
                    <ListItemText primary="Oddziały" />
                </Link>
            </ListItemButton>

            <ListItemButton>
                <Link key='Settings'
                      to='/settings'
                >
                    <ListItemIcon>
                        <SettingsIcon className={
                            location.pathname.includes('/settings') ? "active" : "inactive"
                        } />
                    </ListItemIcon>
                </Link>
                <Link key='settings'
                      to='/settings'
                      style={{textDecoration: 'none'}}
                      className={
                          location.pathname.includes('/settings') ? "active" : "inactive"
                      }>
                    <ListItemText primary="Ustawienia" />
                </Link>
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            {/*<p>ADMIN LIST MENU?</p>*/}
        </React.Fragment>
    )
}