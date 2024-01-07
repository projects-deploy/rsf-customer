import { Category } from "./Category";

export interface Department {
    id: number;
    name: string;
	createdAt?: Date;
	updatedAt?: Date;
    name_link?: string;
	categories: Category;
}