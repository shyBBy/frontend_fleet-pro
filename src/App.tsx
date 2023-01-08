import React from 'react';
import './App.css';
import {useAuth} from "./hooks/useAuth";
import {AuthenticatedApp} from "./views/AuthenticatedApp";
import { UnAuthenticatedApp } from './views/UnAuthenticatedApp';


export const App = () => {

    const {user} = useAuth()

  return (
    <>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
}

