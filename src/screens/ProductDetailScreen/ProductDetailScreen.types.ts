export interface ProductImage {
    _id: string;
    url: string;
  }
  export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: ProductImage[];
  }
