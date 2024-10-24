import React,{useContext} from 'react'
//import UserContext from '../userContext/UserContext';
import UserDataContext from '../userContext/UserDataContext';

export const useUserDataContext = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error('useUserDataContext must be used within a UserDataContextProvider');
    }
    return context;
};