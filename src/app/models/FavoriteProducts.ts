import { Customer } from "./Customer";
import { Product } from "./Product";

export interface FavoriteProducts {
    id: number;
    added_in: Date;
    customer: Customer;
    product: Product[];
}