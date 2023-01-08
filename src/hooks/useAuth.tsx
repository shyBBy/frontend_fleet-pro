import React, {createContext, useContext, useEffect, useState} from "react";
import {config} from "../config/config";
import { setIfErrMsg } from "../helpers/setIfErrMsg";
import { LoggedUserRes, Login } from "../interfaces/auth.interfaces";





interface AuthContextType {
    user: LoggedUserRes | null;
    setUser: React.Dispatch<React.SetStateAction<LoggedUserRes | null>>;
    //@TODO: Ewentualnie do zmiany Promise<typ>
    signIn: (data: Login) => Promise<any> ;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<LoggedUserRes | null>(null);

    const signOut = async () => {
        try {
            const res = await fetch(`http://localhost:3002/api/auth/logout`,
                {
                    method: 'POST',
                    credentials: 'include',
                },
            );
            if (!res.ok) {
                setUser(null);
            }
        } catch (e) {
            setUser(null)
        } finally {
            setUser(null)
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `${config.API_URL}/user`,
                    {
                        credentials: 'include',
                    },
                );
                const errMsg = await setIfErrMsg(res);
                if (!errMsg) {
                    const userData = await res.json();
                    setUser(userData);
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.log(`NOTIFICATION: `)
            }
        })();
    }, []);

    const signIn = async (data: Login) => {
        try {
            const res = await fetch(
                `${config.API_URL}/api/auth/login`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                },
            );
            if (!res.ok) {
                console.log(`NOTIFICATION: Wrong credentials.`)
                setUser(null);
            }
            const userData = (await res.json()) as LoggedUserRes;
            setUser(userData);
        } catch (error) {
            console.log(`NOTIFICATION: dalej`)
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{ user, setUser, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const auth = useContext(AuthContext);

    if(!auth) {
        throw Error('useAuth needs to be used inside AuthContext');
    }

    return auth;
};