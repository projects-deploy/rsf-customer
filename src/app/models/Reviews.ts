import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Reviews {
    id?: number;
    title: string;
    rating: string;
    comment: string;
    updatedAt?: Date;
    createdAt?: Date;
    customer: Customer;
    product?: Product;
}