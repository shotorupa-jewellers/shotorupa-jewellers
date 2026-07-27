export interface Product {

  id: string;

  name: string;

  category: string;

  price: number;

  image: string;

  description?: string;

  stock?: number;

  weight?: string | number;

  metal?: string;

  purity?: string;

}