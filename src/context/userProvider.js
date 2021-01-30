import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = props => {

  // Look into useReducer() for handling complex objects
  const [userObject, setUserObject] = useState({});

  return (
    <UserContext.Provider value={[userObject, setUserObject]}>
      {props.children}
    </UserContext.Provider>
  )
}