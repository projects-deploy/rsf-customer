import { Category } from "./Category";

export interface Department {
    id: number;
    name: string;
	createdAt?: Date;
	updatedAt?: Date;
    router_link?: string;
	categories: Category;
}