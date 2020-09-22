import styled from "styled-components";
export const HomeContainer = styled.div`
  min-height: 65vh;
`;
export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 1em;
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
  flex-direction: column;
  justify-content: space-between;
  margin: 2em 2em 1em 2em;
  .sgds-button {
    width: 100%;
  }
  .sgds-dropdown-trigger {
    width: 100%;
  }
  .sgds-dropdown-menu {
    width: 100%;
  }
  @media screen and (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    .sgds-button {
      width: auto;
    }
  }
`;
