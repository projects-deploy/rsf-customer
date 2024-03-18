import { Answers } from "./Answers";
import { Customer } from "./Customer";

export interface Questions {
    id?: number;
    product_id: number;
    customer_id?: number;
    content: string;
    email: string
    createdAt?: Date;
    updatedAt?: Date;
    answers: Answers[];
    customer?: Customer
}

export interface QuestionsRequest {
    product_id: number;
    customer_id: number;
    content: string;
}