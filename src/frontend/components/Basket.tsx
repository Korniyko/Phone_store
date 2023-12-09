import React, { useEffect, useState } from "react";
import "./Basket.scss";
import { BasketItem } from "../../types";

type BasketProps = {
    basketProducts: BasketItem[],
    countPhone: number,
  
}

const Basket = ({ basketProducts, countPhone }: BasketProps) => {



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
                                <h3>{(item.price * countPhone)}$</h3>
                                <h1>Count Products {item.count}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Basket;
