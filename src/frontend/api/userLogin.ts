import { application } from "express"
import { setUser } from "../store/actions";
import { User } from "../../types";








export const userLogin = (loginValue, passwordValue) => (dispatch: any, getState: () => any): Promise<void> => {

    const login = loginValue;
    const password = passwordValue

    console.log(login, password);



    return fetch('http://localhost:6500/api/userLogin', {
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },

        method: 'POST',
        body: JSON.stringify({
            login,
            password
        }),

    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error(response.statusText)

        }
        return response
    })
        .then((response: Response) => response.json())
        .then((user: {user:User}) => {
           
            if (user) {

                dispatch(setUser(user.user));

            }




        })
        .catch((error: Error) => {
            console.error(`Error happend on userRegistration:${error}`)
        })
}    