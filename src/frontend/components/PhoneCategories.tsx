import React from "react";
import './PhoneCategories.scss';
import { useHistory } from "react-router-dom";
import { ProductsPhone } from "../../types";

type PhoneProps = {
    productsPhone: ProductsPhone | [];
    addToAboutPhone: (add) => void;
}


const PhoneCategories = ({ productsPhone, addToAboutPhone }: PhoneProps) => {
    const history = useHistory()

    const addToBasket = (id: number) => {

        const resultFilter = productsPhone.find(variation => variation.id === id)

        console.log(resultFilter,"resultfilter");
        
        addToAboutPhone(resultFilter)

        history.push('/aboutPhone')

        return resultFilter || null;

    }

    return (
        <section className="categoriesPhone containers">

            <div className="categoriess">
                {productsPhone.map((item) => (
                    <button key={item.id} onClick={() => addToBasket(item.id)}  >
                        <img src={item.mainImg} alt={`Button for ${item.mainImg}`} />
                    </button>
                ))}

            </div>

        </section>

    )
}
export default PhoneCategories;



