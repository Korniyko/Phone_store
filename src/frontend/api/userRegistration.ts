import { application } from "express"


export const userRegistration = (loginValue, passwordValue) => (dispatch: any, getState: () => any): Promise<void> => {

    const login = loginValue;
    const password = passwordValue


    return fetch('http://localhost:6500/api/userRegistration', {
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
        .then((data: any) => {
          
        })
        .catch((error: Error) => {
            console.error(`Error happend on userRegistration:${error}`)
        })
}    