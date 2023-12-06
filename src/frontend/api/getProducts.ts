import { application } from "express"
import { setColor, setSelectedItem } from "../store/actions"
import { Product, Variation } from "../../types"


export const getProducts = () => (dispatch: any, getState: () => any): Promise<void> => {

    return fetch('http://localhost:6500/api/getProducts', {
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
            const airPodsData = data.find((product) => product.manufactor === 'AirPods');

            if (airPodsData) {
                const airPodsVariations = airPodsData.variatins;
             
                dispatch(setColor(airPodsVariations));

                const selected = airPodsVariations[0];
                dispatch(setSelectedItem(selected));
            } 
        })
        .catch((error: Error) => {
            console.error(`Error happend on getProducts:${error}`)
        })
}    