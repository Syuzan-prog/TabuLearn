import React from 'react';
import LogIn from './app/LogIn/LogIn';
import RecoverPassword from './app/RecoverPassword/RecoverPassword';
import SignUp from './app/SignUp/Signup';


const Root = () =>{
    return(
        <>
          <LogIn />
          <SignUp/>
          <RecoverPassword />
        </>
    )
}

export default Root;