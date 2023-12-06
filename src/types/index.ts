
export type SelectedItemState = Variation | [] | undefined



export type ProductsState = Product[]

export type Product = {
    id: number;
    color: string;
    mainImg: string;
    buttonImg: string;
    descriptionImg: string;
    caseImg: string;
    variatins: Variation[];
};

export type Variation = {
    id: number;
    color: string;
    mainImg: string;
    buttonImg: string;
    descriptionImg: string;
    caseImg: string;
    backgroundColor: string;
    backgroundColorHeader: string

};

// export type ValueReagistration = {
//     loginValue: string,
//     passwordValue: string 
// }
export type ProductsPhone = Phone |  []

export type Phone = {
    id: number;
    name: string;
    mainImg: string;
    color: string;
    price: number;
};

