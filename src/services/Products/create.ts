import {
  CreateProducts,
  ProductsConstructor,
  ProductsConstructorArgs,
} from "./interface";

const createProductsService: CreateProducts = function (
  ctor: ProductsConstructor,
  opts: ProductsConstructorArgs
) {
  return new ctor(opts);
};

export default createProductsService;
