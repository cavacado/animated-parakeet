import styled from "styled-components";
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px dashed ${(p) => p.theme.productBorder};
  border-radius: 0.2em;
  margin: 1em;
  overflow-y: scroll;
`;
