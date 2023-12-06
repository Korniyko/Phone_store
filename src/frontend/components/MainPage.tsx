import React, { useEffect } from "react";
import CategoriesColors from "../containers/CategoriesColors";
import ProductDescription from "../containers/ProductDescription";
import СaseAirPods from "../containers/СaseAirPods";
import ContainerAudio from "./ContainerAudio";
import MainScreen from "../containers/MainScreen";
import PhoneCategories from "../containers/PhoneCategories";



type AppProps = {
    getProducts: () => void
    getProductsPhone: () => void
}

const MainPage = ({ getProducts, getProductsPhone }: AppProps) => {

    useEffect(() => {
        getProducts()
        getProductsPhone()

    }, [])



    return (
        <>
            <MainScreen/>
            <CategoriesColors />
            <PhoneCategories/>
            <ProductDescription />
            <СaseAirPods />
            <ContainerAudio />
        </>
    )
}
export default MainPage;