import { Request, Response } from "express"
import productJson from '../mock/Products.json'


export const getProductsPhone = async (request: Request, response: Response) => {

    try {
      

        const productsData = productJson

        response.json(productsData)
    } catch (error: any) {
        console.log(`error happend on route getProducts:${error.message}`)
        response.sendStatus(500)
    }

}