import React, {createContext, useContext, useEffect, useState} from "react";
import {config} from "../config/config";

export enum Role {
    USER = 1,
    ADMIN = 2,
}

export interface UserData {
    id: string;
    isActive: boolean;
    role: Role;
    email: string;
    password: string;
}

export type UserRes = Pick<UserData, 'id' | 'role' | 'email'>;

export interface LoggedUserRes extends UserRes {
    firstName: string;
    lastName: string;
}

export interface Login {
    email: string;
    password: string;
}

interface AuthContextType {
    user: LoggedUserRes | null;
    setUser: React.Dispatch<React.SetStateAction<LoggedUserRes | null>>;
    signIn: (data: Login) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [user, setUser] = useState<LoggedUserRes | null>(null);
    const signOut = async () => {
        try {
            const res = await fetch(config.API_URL + 'api/auth/logout', {
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
                const res = await fetch(config.API_URL + 'api/auth/getuser',
                    {
                        credentials: 'include',
                    },
                )
                const errMsg = `message: ${res}`
                if (!errMsg) {
                    const userData = await res.json();
                    setUser(userData);
                } else {
                    setUser(null);
                }
            } catch (e) {

            }
        })();
    }, []);

    const signIn = async (data: Login) => {
        try {
            const res = await fetch(config.API_URL + 'api/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            },);
            if (!res.ok) {

                setUser(null);
            }
            const userData = (await res.json()) as LoggedUserRes;
            setUser(userData);
        } catch (e) {

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

}

export const useAuth = () => {
    const auth = useContext(AuthContext);

    if(!auth) {
        throw Error('useAuth needs to be used inside AuthContext');
    }

    return auth;
};