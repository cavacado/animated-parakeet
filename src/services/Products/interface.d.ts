import { Network, NetworkResponse } from "../Network/interface";

interface movie {
  name: string;
  productionYear: number;
  genre: string;
  synopsisShort: string;
  synopsis: string;
  image: string;
}
type ProductsDetails = movie[];

export type ProductsConstructorArgs = {
  network: Network;
  url?: string;
};

export interface ProductsConstructor {
  new (opts: ProductsConstructorArgs): ProductsService;
}

export interface ProductsService {
  getProducts(): Promise<NetworkResponse<ProductsDetails>>;
}

export type CreateProducts = (
  ctor: ProductsConstructor,
  opts: ProductsConstructorArgs
) => ProductsService;
