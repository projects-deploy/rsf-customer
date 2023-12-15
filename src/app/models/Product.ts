import { Brand } from "./Brand";

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
    createdAt?: Date;
    updatedAt?: Date;
    is_discount?: boolean;
    brand: Brand;
}