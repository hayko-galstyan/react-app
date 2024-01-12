import React, { useState } from "react";
import { Registration } from "./components/Registration/registration";
import { Login } from "./components/Login/login";
import './App.css';
function App() {
  const [sign , changeSign] =  useState(true);

  const changeComponent = () => {
    changeSign(!sign);
  }

  const registration = (data) => {
    console.log(data)
  }

  const login = (data) => {
    console.log(data)
  }

  return(
    <React.Fragment>
      { sign 
        ? <Registration
            onChangeSign = {changeComponent}
            onRegistration = {registration}
        />
        : <Login
            onChangeSign = {changeComponent}
            onLogin = {login}
        />
      }
    </React.Fragment>
  )
}
export default App;