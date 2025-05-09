
interface ProductImage {
    _id: string;
    url: string;
  }
interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    images: ProductImage[];
  }
  export interface ProductListProps {
    data: Product[];
  }
