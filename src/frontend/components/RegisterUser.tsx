import React, { useEffect, useState } from "react";
import "./RegisterUser.scss";
import Button from "./Button";




type RegisterProps = {
    userRegistration: (loginValue, passwordValue) => void
    userLogin: (loginValue, passwordValue) => void
}


const RegisterUser = ({ userRegistration, userLogin }: RegisterProps) => {

    const [loginValue, setloginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const handleInputLogin = (event) => {
        setloginValue(event.target.value)
    }
    const handleInputPassword = (event) => {
        setPasswordValue(event.target.value)
    }


    const registerValue = () => {
        userRegistration(loginValue, passwordValue)

    }
    const loginData = () => {
        userLogin(loginValue, passwordValue)


    }


    return (
        <div className="registerUser">
            <div className="containerRegister">

                <div className="registrationInputs">
                    <div className="login">
                        <input type="text" placeholder="Login" value={loginValue} onChange={handleInputLogin} />
                    </div>
                    <div className="password">
                        <input type="text" placeholder="Password" value={passwordValue} onChange={handleInputPassword} />

                    </div>
                    <div className="containerButton">
                        <Button label='login' onClick={() => loginData()} />
                        <Button label='Register' onClick={() => registerValue()} />
                    </div>

                </div>

            </div>
        </div>

    )

}
export default RegisterUser;