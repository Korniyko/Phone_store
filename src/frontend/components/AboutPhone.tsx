import React, { useState } from "react";
import "./AboutPhone.scss";
import Button from "./Button";
import { Phone } from "../../types";


type AboutPhoneProps = {
    descriptionPhone: Phone;
    setPhoneToBasket: (phone: Phone) => void
}


const AboutPhone = ({ descriptionPhone, setPhoneToBasket }: AboutPhoneProps) => {

    const addToBasketPhone = (phone: Phone) => {

        // const productId = descriptionPhone.id;

        // const existingItems = JSON.parse(localStorage.getItem("basketItems") || "[]");
        // existingItems.push(productId);
        // localStorage.setItem("basketItems", JSON.stringify(existingItems));

        setPhoneToBasket(phone)

    }

    return (

        <div className="phoneContainers ">

            <div className="products container">
                <div className="product">
                    <img src={descriptionPhone.mainImg} alt={descriptionPhone.name} />
                    <div className="productName">
                        <h1>{descriptionPhone.name}</h1>
                        <h3>{descriptionPhone.price}$</h3>
                        {<Button label="Add to Basket" onClick={() => addToBasketPhone(descriptionPhone)} />}
                    </div>
                </div >
            </div>
        </div>

    )

}
export default AboutPhone;