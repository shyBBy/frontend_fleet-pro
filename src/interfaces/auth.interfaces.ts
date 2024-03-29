export interface ErrorRes {
    statusCode: number;
    message: string;
}

export enum Role {
    STUDENT = 1,
    HR = 2,
    ADMIN = 3,
}

export interface UserData {
    id: string;
    isActive: boolean;
    role: Role;
    email: string;
    password: string;
    registerToken?: string | null;
}

export type UserRes = Pick<UserData, 'id' | 'role' | 'email'>;

export interface LoggedUserRes extends UserRes {
    name: string;
    surname: string;
}

export interface Login {
    email: string;
    password: string;
}