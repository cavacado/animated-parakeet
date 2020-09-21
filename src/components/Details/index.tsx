import React from "react";
import { useLocation } from "react-router-dom";
import { DetailsContainer } from "./styled";
import {
  ProductHead,
  ProductSubHead,
  ImageContainer,
  Image,
} from "../common/styled";

export default function () {
  const location = useLocation();
  const { synopsis, genre, productionYear, name, image } = location.state;
  React.useLayoutEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <DetailsContainer>
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
      <p dangerouslySetInnerHTML={{ __html: synopsis }} />
    </DetailsContainer>
  );
}
