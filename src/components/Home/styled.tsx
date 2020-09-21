import styled from "styled-components";
export const HomeContainer = styled.div`
  min-height: 65vh;
`;
export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`;
