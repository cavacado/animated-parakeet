import styled from "styled-components";
export const ProductHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductSubHead = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5em;
`;

export const Image = styled.img`
  height: 125px;
  object-fit: scale-down;
  filter: ${(p) => p.theme.imageFilter};
  transition: 0.3s linear;
`;
