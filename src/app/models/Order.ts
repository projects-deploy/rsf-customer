import { CartItem } from "./Cart";
import { Customer } from "./Customer";

export interface Order {
    id?: number;
    date_order: Date;
    value_total: number;
    shipping: number;
    to_remove: number;
    comments: string;
    status: number;
    customer?: Customer;
    items: CartItem[];
}