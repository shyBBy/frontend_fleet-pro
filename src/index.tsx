import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import {MobileViewProvider} from "./context/MobileViewContext";
import {BrowserRouter} from "react-router-dom";
import { App } from './App';
import {AppProviders} from "./providers/AppProviders";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppProviders>
        <>
            <CssBaseline/>
            <MobileViewProvider>
                <App />
            </MobileViewProvider>
        </>
    </AppProviders>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
