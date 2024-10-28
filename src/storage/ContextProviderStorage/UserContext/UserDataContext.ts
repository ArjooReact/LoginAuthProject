import React, {createContext, ReactNode, useContext, useState} from 'react';

export type AuthUser = {
  isloggedIn:boolean,  
  userName: string;
  passWord: string;
  token:string
};

export type UserDataContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export default UserDataContext;