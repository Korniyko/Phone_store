import React from "react";
import './ProductDescription.scss';
import { Product, Variation } from "../../types";

type ProductProps = {
    selected: Variation;
}

const ProductDescription = ({ selected }: ProductProps) => {



    return (
        <div className="productDescription">
            <h1>An extremely original composition.</h1>
            <h2>Introducing the reinvention of over-the-ear headphones.
                From the cushion to the headband, the AirPods Max are designed with acoustic insulation in mind,
                adapted to many head shapes, so you can immerse yourself in the purity of sound.
            </h2>
            <div className="containerDescription">
                <div className="textContainer">
                    <p>The headband is made of breathable mesh, distributing the weight to reduce pressure on the head.</p>
                    <p>The stainless steel structure is wrapped in a soft-touch
                        material to provide a remarkable harmony between resistance, flexibility and comfort.
                    </p>
                    <p>The telescoping arms expand and stay in any position you want, allowing you to maintain fit and isolation.</p>

                </div>
                <div className="imgContainer">

                    <img src={selected.descriptionImg} alt={`Button for ${selected.color}`} />

                </div>
            </div>
        </div>

    )
}
export default ProductDescription;