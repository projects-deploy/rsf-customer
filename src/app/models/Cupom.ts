export interface Cupom {
     id?: number;
     code: string;
     discount: number;
     active: boolean;
     expiration_date: Date;
}