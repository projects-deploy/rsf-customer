import { ItemOrder } from "./ItemOrder";

export interface Order {
    id: number;
    date_order: Date;
    value_total: number;
    shipping: number; // retirar
    to_remove: number;
    comments: string;
    status: number;
    // Customer customer;
    itemsOrder: ItemOrder[];
}