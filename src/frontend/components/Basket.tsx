import React, { useEffect, useState } from "react";
import "./Basket.scss";
import { BasketItem } from "../../types";

type BasketProps = {
    basketProducts: BasketItem[],
    updateBasket: (products: BasketItem[]) => void
}

const Basket = ({ basketProducts, updateBasket }: BasketProps) => {


    const removeFromBasket = (idRemove: number) => {

        const newBasketProducts = basketProducts.map((item) => {
            if (item.id === idRemove) {
                if (item.count > 1) {

                    const newObject = {
                        ...item,
                        count: item.count - 1
                    }

                    return newObject;
                } else {
                    return null
                }
            }
            return item;
        }).filter((item) => item !== null) as BasketItem[];

        // const basketlocalStorage = JSON.parse(localStorage.getItem("basketItems") || "[]");
        // const newLocalStorage = basketlocalStorage.filter((itemId: number) => itemId !== idRemove);

        // localStorage.setItem("basketItems", JSON.stringify(newLocalStorage));


        updateBasket(newBasketProducts)
    };

    const isBasketEmpty = basketProducts.length === 0;

    return (
        <div className="basketContainers ">
            {isBasketEmpty ? (
                <h1>Add product to Basket</h1>
            ) : (
                <div className="products container">
                    {basketProducts.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.mainImg} alt={item.name} />
                            <div className="productName">
                                <h1>{item.name}</h1>
                                <h3>{(item.price * item.count)}$</h3>
                                <h1>Count Products {item.count}</h1>
                            </div>
                            <div className="removeFromBasket" onClick={() => removeFromBasket(item.id)}>
                                X
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Basket;
