import { Favorites } from "./Favorites";

export interface Customer {
    id?: number;
    uf: string;
    cpf: string;
    cep: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    numero: number;
    bairro: string;
    link_photo: string;
    localidade: string;
    logradouro: string;
    complemento: string;
    birth_date: Date;
    createdAt?: Date;
    updatedAt?: Date;
    favorites?: Favorites[];
}