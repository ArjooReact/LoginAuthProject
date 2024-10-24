import React, {useState} from 'react';
//import UserContext from './UserContext';
import UserDataContext from './UserDataContext';
import {AuthUser} from './UserDataContext';

type UserDataContextProviderProps = {
  children: React.ReactNode;
};
export const UserDataContextProvider = ({
  children,
}: UserDataContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserDataContext.Provider value={{user, setUser}}>
      {children}
    </UserDataContext.Provider>
  );
};
export default UserDataContextProvider;


