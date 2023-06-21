import { styled } from "styled-components";

export const WrapLoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(p) => p.theme.space[4]}px;
`;

export const Button = styled.button`
  padding: ${(p) => p.theme.space[3]}px ${(p) => p.theme.space[5]}px;
  border: 1px solid ${(p) => p.theme.colors.darkColor};
  border-radius: ${(p) => p.theme.radii.small};
  cursor: pointer;
  color: ${(p) => p.theme.colors.darkColor};
  font-size: ${(p) => p.theme.fontWeights.bold};

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  &:hover {
    transform: scale(1.03);
    border: 1px solid ${(p) => p.theme.colors.borderHover};
  }
`;
