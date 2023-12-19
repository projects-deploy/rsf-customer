import { Product } from "./Product";

export interface CartItem {
    products: Product;
    quantity: number;
}

export interface ShoppingCart {
    items: CartItem[];
    totalAmount: number;
}