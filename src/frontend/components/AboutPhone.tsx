import React, { useState } from "react";
import "./AboutPhone.scss";
import Button from "./Button";
import { Phone } from "../../types";



type AboutPhoneProps = {
    descriptionPhone: Phone;
    setPhoneToBasket: (phone: Phone, isInpuntCount: number) => void
}


const AboutPhone = ({ descriptionPhone, setPhoneToBasket }: AboutPhoneProps) => {

    const [isInpuntCount, setInpuntCount] = useState(1)

    const addToBasketPhone = (phone: Phone, isInpuntCount: number) => {

        setPhoneToBasket(phone, isInpuntCount)

    }
    const inputPlus = () => {
        const result = isInpuntCount + 1
        setInpuntCount(result)
    }
    const inputMinus = () => {
        const result = isInpuntCount - 1
        if (result >= 1) {
            setInpuntCount(result)
        }

    }

    return (

        <div className="phoneContainers ">

            <div className="products container">
                <div className="product">
                    <img src={descriptionPhone.mainImg} alt={descriptionPhone.name} />
                    <div className="productName">
                        <h1>{descriptionPhone.name}</h1>
                        <h3>{descriptionPhone.price}$</h3>
                        <div className="input">
                            <div onClick={() => inputPlus()}>+</div>
                            <input type="text" value={isInpuntCount} onChange={() => { }} />
                            <div onClick={() => inputMinus()}>-</div>
                        </div>
                        {<Button label="Add to Basket" onClick={() => addToBasketPhone(descriptionPhone, isInpuntCount)} />}
                    </div>
                </div >
            </div>
        </div>

    )

}
export default AboutPhone;