import { styled } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: ${(p) => p.theme.space[3]}px;
  list-style-type: none;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.table}) {
    gap: ${(p) => p.theme.space[4]}px;
  }
`;

export const Item = styled.li`
  min-width: 100%;
  height: 460px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.mobile}) {
    min-width: 380px;
  }
`;
