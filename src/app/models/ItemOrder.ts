import { Product } from "./Product";

export interface ItemOrder {
	id?: number;
	qtde_item: number;
	unit_price: number;
	total_price: number;
	product: Product[];
}