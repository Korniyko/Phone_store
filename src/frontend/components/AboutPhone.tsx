import React, { useState } from "react";
import "./AboutPhone.scss";
import Button from "./Button";
import { Phone } from "../../types";





type AboutPhoneProps = {
    descriptionPhone: Phone;
    setPhoneToBasket: (phone:Phone) => void
    countPhone: (count:number) => void
}


const AboutPhone = ({ descriptionPhone, setPhoneToBasket, countPhone }: AboutPhoneProps) => {

    const [iscountPhone, setCountPhone] = useState(1);

    console.log(descriptionPhone);

    const addToBasketPhone = (phone:Phone) => {
        setPhoneToBasket(phone)
        countPhone(iscountPhone)

        setCountPhone(iscountPhone + 1)
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
            <div className="filterPhone ">
                {<Button label="16" />}
                {<Button label="64" />}
                {<Button label="128" />}
                {<Button label="256" />}

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