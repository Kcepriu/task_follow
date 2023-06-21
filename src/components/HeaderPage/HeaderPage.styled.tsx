import { styled } from "styled-components";

export const Header = styled.div`
  padding: ${(p) => p.theme.space[3]}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  box-shadow: ${(p) => p.theme.shadows.boxShadow};
`;
