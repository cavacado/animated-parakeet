import React from "react";
import { useHistory } from "react-router-dom";
import { movie } from "../../services/Products/interface";
import { ProductContainer } from "./styled";
import {
  ProductHead,
  ProductSubHead,
  ImageContainer,
  Image,
} from "../common/styled";

interface ProductProps extends movie {}
export default function (props: ProductProps) {
  const history = useHistory();
  const { synopsisShort, genre, productionYear, name, image } = props;
  return (
    <ProductContainer onClick={() => history.push("/details", props)}>
      <ProductHead>
        <p>{name}</p>
        <ProductSubHead>
          <span>{genre}</span>
          <span>{productionYear}</span>
        </ProductSubHead>
      </ProductHead>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <p>{synopsisShort}</p>
    </ProductContainer>
  );
}
