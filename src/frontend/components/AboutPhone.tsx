import React, { useState } from "react";
import "./AboutPhone.scss";
import Button from "./Button";
import { Phone } from "../../types";





type AboutPhoneProps = {
    descriptionPhone: Phone;
    setPhoneToBasket: (phone:Phone) => void
}


const AboutPhone = ({ descriptionPhone, setPhoneToBasket }: AboutPhoneProps) => {

 

   

    const addToBasketPhone = (phone:Phone) => {
        
        setPhoneToBasket(phone)

    }

    return (

        <div className="phoneContainers ">
            <div className="filterPhone ">
                {<Button label="Pink" />}
                {<Button label="Black" />}
                {<Button label="Yellow" />}
                {<Button label="Red" />}
                {<Button label="Blue" />}
            </div>
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