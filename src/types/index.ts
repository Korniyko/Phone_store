import { UsersInterface } from "../server/dataBase/models/users";

export type SelectedItemState = Variation | null | undefined



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


export type Phone = {
    id: number;
    name: string;
    mainImg: string;
    color: string;
    price: number;
};
export type BasketItem = Phone & {
    count: number;
};

export type CredentialType= {
    login: string,
    password:string
}

export type ReducerPhoneDescription = Phone | null | undefined
export type ReducerPhoneProducts = Phone[] 
export type ReducerBasketProducts =BasketItem[] 
export type ReducerUser = User | null | undefined
    

export type User = UsersInterface | null | undefined
   

