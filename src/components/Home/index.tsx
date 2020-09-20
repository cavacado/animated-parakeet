import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../data/reducers";
import { ProductsState } from "src/data/reducers/products";
import productActions from "../../data/actions/products";
import { movie } from "../../services/Products/interface";
import { placeHolderDetails } from "../../services/Products/mockData";
import { HomeGrid } from "./styled";
import ErrorPage from "../FullPage/Error";
import Product from "./Product";
import { AsyncStates } from "src/utils";
import Loading from "react-fullscreen-loading";
import * as COLORS from "../../utils/colors";
import { images, placeholder } from "../../assets";

const injectProductImageCallback = (product: movie, i: number) => {
  return {
    ...product,
    image: images[i],
  };
};
const injectPlaceholderCallback = (product: movie) => {
  return {
    ...product,
    image: placeholder,
  };
};
const augmentedPlaceholderDetails = placeHolderDetails.map(
  injectPlaceholderCallback
);

export default function () {
  const productsState = useSelector<State>((state) => state.products);
  const { data, status, error } = productsState as ProductsState;
  const [cachedProducts, setCachedProducts] = React.useState<movie[]>(
    augmentedPlaceholderDetails
  );
  const [cachedError, setCachedError] = React.useState<string>("");
  const dispatch = useDispatch();
  const isSuccess = status === AsyncStates.SUCCESS;
  const isError = status === AsyncStates.ERROR;
  React.useEffect(() => {
    dispatch(productActions.productsRequest());
  }, []);
  React.useEffect(() => {
    if (isSuccess) {
      const augmentedData = data.map(injectProductImageCallback);
      setCachedProducts(augmentedData);
      setCachedError("");
    }
  }, [isSuccess, data]);
  React.useEffect(() => {
    isError && setCachedError(error);
  }, [isError, error]);
  return (
    <>
      {status === AsyncStates.LOADING && (
        <Loading
          loading
          background={COLORS.BLACK2}
          loaderColor={COLORS.WHITE0}
        />
      )}
      {cachedError ? (
        <ErrorPage onRetry={() => dispatch(productActions.productsRequest())} />
      ) : (
        <HomeGrid>
          {cachedProducts.map((product, i) => {
            return <Product {...product} key={`product-${i}`} />;
          })}
        </HomeGrid>
      )}
    </>
  );
}
