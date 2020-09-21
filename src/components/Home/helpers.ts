import { images, placeholder } from "../../assets";
import { movie } from "../../services/Products/interface";
export const injectProductImageCallback = (product: movie, i: number) => {
  return {
    ...product,
    image: images[i],
  };
};
export const injectPlaceholderCallback = (product: movie) => {
  return {
    ...product,
    image: placeholder,
  };
};
export function identity<T>(x: T) {
  return x;
}
