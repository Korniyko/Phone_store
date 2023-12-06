import { Router } from "express";
import { getProducts } from "./getProducts";
import { getProductsPhone } from "./getProductsPhone";
import { userRegistration } from "./userRegistration";
import { userLogin } from "./userLogin";

const routes = Router()

routes.get('/getProducts',getProducts)
routes.get('/getProductsPhone', getProductsPhone)
routes.post('/userRegistration',userRegistration)
routes.post('/userLogin',userLogin)

export default routes;