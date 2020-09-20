import styled from "styled-components";
export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  overflow-y: scroll;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px dashed ${(p) => p.theme.productBorder};
  border-radius: 0.2em;
  margin: 1em;
  cursor: pointer;
`;
