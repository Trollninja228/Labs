export interface ProductItem {
  id: number;
  name: string;
  description: string;
  image: string;
  likes: number;
  link: string;
  price: number;
  isDiscounted: boolean;
  count:number;
}

export interface Category {
  id: number;
  name: string;
  products: ProductItem[];
}
