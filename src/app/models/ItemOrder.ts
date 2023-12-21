import { Product } from "./Product";

export interface ItemOrder {
	qtde_item: number;
	unit_price: number;
	total_price: number;
	product: Product[];
}