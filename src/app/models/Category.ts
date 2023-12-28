import { Department } from "./Department";
import { Product } from "./Product";

export interface Category {
    id: number;
    name: string;
	createdAt?: Date;
	updatedAt?: Date;
    router_link?: string;
    products: Product[];
	department: Department[];
}