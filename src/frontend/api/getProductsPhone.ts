import { application } from "express"
import { setProductsPhone } from "../store/actions"



export const getProductsPhone = () => (dispatch: any, getState: () => any): Promise<void> => {

    return fetch('http://localhost:6500/api/getProductsPhone', {
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        method: 'GET',

    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response
    })
        .then((response: Response) => response.json())
        .then((data: any) => {
            const productsPhone = data[1].variatins
           
            dispatch(setProductsPhone(productsPhone));

        })
        .catch((error: Error) => {
            console.error(`Error happend on getProducts:${error}`)
        })
}    