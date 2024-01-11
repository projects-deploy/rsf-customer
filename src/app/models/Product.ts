import { Brand } from "./Brand";
import { Category } from "./Category";
import { Department } from "./Department";
import { Reviews } from "./Reviews";

export interface Product {
    id?: number;
    name: string;
    detail: string;
    link_photo: string;
    price_product: number;
    price_promo: number;
    in_stok: number;
    available?: number;
    delivery: number;
    discount: number;
    category_idd: number;
    department_idd: number;
    average_rating: number;
    review_count: number;
    createdAt?: Date;
    updatedAt?: Date;
    is_discount?: boolean;
    product_size: string;
    product_colors: string;
    brand: Brand;
    category: Category;
    department: Department;
    reviews?: Reviews[];
}