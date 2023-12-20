import { Department } from "./Department";
import { Product } from "./Product";

export interface Category {
    id: number;
    name: string;
	createdAt?: Date;
	updatedAt?: Date;
    products: Product;
	department: Department;
}