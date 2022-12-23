import React from 'react';
import './App.css';
import {useAuth} from "./hooks/useAuth";
import {AuthenticatedApp} from "./pages/AuthenticatedApp";
import { UnAuthenticatedApp } from './pages/UnAuthenticatedApp';

export const App = () => {

    const {user} = useAuth()

  return (
    <>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
}

export default App;
