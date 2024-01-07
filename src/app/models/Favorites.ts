import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Favorites {
    id?: number;
    added_in?: Date;
    customer: Customer;
    product: Product[];
}