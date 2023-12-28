import { Product } from "./Product";

export interface CartItem {
    qtde_item: number;
    amount: number;
    product: Product;
}

export interface ShoppingCart {
    items: CartItem[];
}