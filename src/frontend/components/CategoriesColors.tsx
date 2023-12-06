import React from "react";
import './CategoriesColors.scss'
import { Product, Variation } from "../../types";

type CategoriesColorsProps = {
    products: Product[] ,
    addNewColor: (resultFilter: Product | undefined) => void

}

const CategoriesColors = ({ products, addNewColor }: CategoriesColorsProps) => {
  


    const filterColor = (id: number) => {

        const resultFilter = products.find(variation => variation.id === id)


        addNewColor(resultFilter)

        return resultFilter || null;

    }



    return (
        <section className="categoriesColors containers">
            <h1>Choose your colour</h1>
            <p>The perfect balance between the purityof hi‑fi and the magic of AirPods.
                The ultimate personal audio experience.</p>

            <div className="categories">
                {products.map(product => (

                    <button key={product.id} onClick={() => filterColor(product.id)}>
                        <img src={product.buttonImg} alt={`Button for ${product.color}`} />
                    </button>
                ))
                }
            </div>
        </section>

    )
}
export default CategoriesColors;



