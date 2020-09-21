import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownItem, Button } from "sgds-govtech-react";
import { State } from "../../data/reducers";
import { ProductsState } from "src/data/reducers/products";
import productActions from "../../data/actions/products";
import { movie } from "../../services/Products/interface";
import { placeHolderDetails } from "../../services/Products/mockData";
import { HomeContainer, HomeGrid, DropdownContainer } from "./styled";
import ErrorPage from "../FullPage/Error";
import Product from "./Product";
import { AsyncStates } from "src/utils";
import Loading from "react-fullscreen-loading";
import * as COLORS from "../../utils/colors";
import {
  injectPlaceholderCallback,
  injectProductImageCallback,
  identity,
} from "./helpers";

const augmentedPlaceholderDetails = placeHolderDetails.map(
  injectPlaceholderCallback
);
const DEFAULT_GENRE_FILTER = "filter by genre";
const DEFAULT_YEAR_FILTER = "filter by year";

export default function () {
  const productsState = useSelector<State>((state) => state.products);
  const { data, status, error } = productsState as ProductsState;
  const [cachedProducts, setCachedProducts] = React.useState<movie[]>(
    augmentedPlaceholderDetails
  );
  const [genreFilter, setGenreFilter] = React.useState<string>(
    DEFAULT_GENRE_FILTER
  );
  const [yearFilter, setYearFilter] = React.useState<string>(
    DEFAULT_YEAR_FILTER
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
  const genreAndYears = React.useMemo(() => {
    let years: number[] = [];
    let genres: string[] = [];
    cachedProducts.forEach((product: movie) => {
      years.push(product.productionYear);
      genres.push(product.genre);
    });
    years.sort((a, b) => a - b);
    return {
      years: Array.from(new Set(years)),
      genres: Array.from(new Set(genres)),
    };
  }, [cachedProducts]);
  const filteredProducts = React.useMemo(() => {
    const genreCallback =
      genreFilter === DEFAULT_GENRE_FILTER
        ? identity
        : (product: movie) => product.genre === genreFilter;
    const yearCallback =
      yearFilter === DEFAULT_YEAR_FILTER
        ? identity
        : (product: movie) => product.productionYear === Number(yearFilter);
    return cachedProducts.filter(genreCallback).filter(yearCallback);
  }, [cachedProducts, genreFilter, yearFilter]);
  const handleFilterReset = () => {
    setGenreFilter(DEFAULT_GENRE_FILTER);
    setYearFilter(DEFAULT_YEAR_FILTER);
  };
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
        <HomeContainer>
          <DropdownContainer>
            <Button isPrimary onClick={handleFilterReset}>
              reset filters
            </Button>
            <Dropdown title={genreFilter}>
              {genreAndYears.genres.map((genre, i) => {
                return (
                  <DropdownItem
                    onClick={() => setGenreFilter(genre)}
                    key={`genre-filter_${i}`}
                  >
                    {genre}
                  </DropdownItem>
                );
              })}
            </Dropdown>
            <Dropdown title={yearFilter}>
              {genreAndYears.years.map((year, i) => {
                return (
                  <DropdownItem
                    onClick={() => setYearFilter(String(year))}
                    key={`year-filter_${i}`}
                  >
                    {year}
                  </DropdownItem>
                );
              })}
            </Dropdown>
          </DropdownContainer>
          <HomeGrid>
            {filteredProducts.map((product, i) => {
              return <Product {...product} key={`product-${i}`} />;
            })}
          </HomeGrid>
        </HomeContainer>
      )}
    </>
  );
}
