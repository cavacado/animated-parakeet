import styled from "styled-components";
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content auto max-content;
  height: 100vh;
`;

export const Demarker = styled.div`
  height: 1px;
  border-top: ${(p) => `1px solid ${p.theme.demarker}`};
`;
