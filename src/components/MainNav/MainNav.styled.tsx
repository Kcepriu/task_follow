import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  gap: ${(p) => p.theme.space[4]}px;
  margin-left: ${(p) => p.theme.space[4]}px;
  list-style-type: none;
`;
export const Item = styled.li`
  width: 100px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;

  padding: ${(p) => p.theme.space[3]}px;
  border: 1px solid ${(p) => p.theme.colors.darkColor};

  border-radius: ${(p) => p.theme.radii.small};

  text-decoration: none;
  color: ${(p) => p.theme.colors.darkColor};
  font-size: ${(p) => p.theme.fontWeights.bold};

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  &:hover {
    transform: scale(1.03);
    border: 1px solid ${(p) => p.theme.colors.borderHover};
    /* box-shadow: ${(p) => p.theme.shadows.hoverShadow}; */
  }

  &.active {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.backgroundActiveButton};
    border: 1px solid ${(p) => p.theme.colors.backgroundActiveButton};
  }
`;
