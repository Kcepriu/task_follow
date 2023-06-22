import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  /* flex-direction: column; */
  gap: ${(p) => p.theme.space[2]}px;
  color: ${(p) => p.theme.colors.darkColor};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
`;

export const Label = styled.label`
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xs};

  margin-top: ${(p) => p.theme.space[2]}px;
  margin-left: ${(p) => p.theme.space[2]}px;
`;

export const Input = styled.input`
  margin-right: ${(p) => p.theme.space[3]}px;
`;

export const Select = styled.select`
  width: 70px;
  padding: ${(p) => p.theme.space[3]}px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`;
export const InputName = styled.input`
  padding: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.radii.small};
`;
