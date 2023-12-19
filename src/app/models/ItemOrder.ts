import { Order } from "./Order";
import { Product } from "./Product";

export interface ItemOrder {
	qtde_item: number;
	unit_price: number;
	total_price: number;
	order: Order;
	product: Product[];
}