import React from "react";
import {ProductStore} from "./store/product.store";
import {ProductService} from "./service/product.service";

interface StoreContextInterface {
    productStore: ProductStore
}

export const StoreContext = React.createContext<StoreContextInterface>({
    productStore: new ProductStore(new ProductService())
})