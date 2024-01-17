export interface Cupom {
     id?: number;
     code: string;
     discount: number;
     couponType?: string;
     discountType?: string;
     active: boolean;
     expiration_date?: Date;
}