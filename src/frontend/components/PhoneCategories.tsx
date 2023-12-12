import React, { useEffect, useState } from "react";
import './PhoneCategories.scss';
import { useHistory } from "react-router-dom";
import { Phone, ProductsPhone } from "../../types";
import Button from "./Button";

type PhoneProps = {
    productsPhone: ProductsPhone | [];
    addToAboutPhone: (add: Phone) => void;


}

const PhoneCategories = ({ productsPhone, addToAboutPhone }: PhoneProps) => {

    const history = useHistory()

    const addPhone = (id: number) => {
        const resultFilter = productsPhone.find(variation => variation.id === id)
        addToAboutPhone(resultFilter)

        history.push('/aboutPhone')

        return resultFilter || null;
    }

    useEffect(() => {
        setFilterPhoneColor(productsPhone);
    }, [productsPhone]);

    const [filterPhoneColor, setFilterPhoneColor] = useState(productsPhone);

    const filterColorPhone = (colorButton: string) => {

        const resultFilterColor = productsPhone.filter((item:Phone) => item.color === colorButton)

        setFilterPhoneColor(resultFilterColor)
    }
    const allProducts = () => {
        setFilterPhoneColor(productsPhone)
    }

    return (
        <section className="categoriesPhone containers">
            < div className="filterPhone ">
                {<Button label="Pink" onClick={() => filterColorPhone("pink")} />}
                {<Button label="Black" onClick={() => filterColorPhone("black")} />}
                {<Button label="Yellow" onClick={() => filterColorPhone("yellow")} />}
                {<Button label="Red" onClick={() => filterColorPhone("red")} />}
                {<Button label="Blue" onClick={() => filterColorPhone("blue")} />}
                {<Button label="All Products" onClick={() => allProducts()} />}
            </div>
            <div className="categoriess">
                {filterPhoneColor.map((item) => (
                    <button key={item.id} onClick={() => addPhone(item.id)}  >
                        <img src={item.mainImg} alt={`Button for ${item.mainImg}`} />
                    </button>
                ))}

            </div>

        </section>

    )
}
export default PhoneCategories;



