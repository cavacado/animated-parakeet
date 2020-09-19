import { ProductsService, ProductsConstructorArgs } from "./interface";
import { Network } from "../Network/interface";
import createProducts from "./create";

class Products implements ProductsService {
  _network: Network;
  _url: string;
  constructor({ network, url, ...args }: ProductsConstructorArgs) {
    this._network = network;
    this._url = url || String(process.env.REACT_APP_SERVICE_URL);
  }
  getProducts = () => {
    return this._network.get(this._url, {
      method: "GET",
    });
  };
}

export default (opts: ProductsConstructorArgs) =>
  createProducts(Products, opts);
