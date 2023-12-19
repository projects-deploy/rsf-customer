import { FavoriteProducts } from "./FavoriteProducts";

export interface Customer {
    id: number;
    uf: number;
    cpf: number;
    cep: number;
    name: number;
    email: number;
    phone: number;
    numero: number;
    bairro: number;
    localidade: number;
    logradouro: number;
    complemento: number;
    birth_date: Date;
    createdAt: Date;
    updatedAt: Date;
    favorites: FavoriteProducts[];
}