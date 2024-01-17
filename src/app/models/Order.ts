import { CartItem } from "./Cart";
import { Customer } from "./Customer";

export interface Order {
    id?: number;
    status: number;
    payment: string;
    shipping: string;
    comments: string;
    receipt_number?: string;
    date_order: Date;
    value_total: number;
    customer: Customer;
    items: CartItem[];
}