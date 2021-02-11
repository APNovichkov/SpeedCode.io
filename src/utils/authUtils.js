import React, {useContext} from 'react'
import {useCookies} from 'react-cookie';
import {UserContext} from './../context/userProvider';

export const updateUserObject = () => {
    const [cookie, setCookie] = useCookies("speedcode-cookiez")
    const [userObject, setUserObject] = useContext(UserContext);
    
    console.log("Speedcode Cookie:", cookie);
}