import styled from "styled-components/native";

import { TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components/native";

interface ButtonProps {
  bgColor?: string;
  borderColor?: string;
}

interface TitleProps {
  color?: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  align-items: center;
  ${({theme, bgColor, borderColor})=>css`
    background-color: ${bgColor || theme.colors.primary};
    border-color: ${borderColor || theme.colors.gray800};
  `}
  border-width: ${(RFValue(1))}px;
  border-radius: 5px;
  padding: 18px;
  margin-top: ${RFValue(16)}px;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(14)}px;
  ${({theme, color})=>css`
    color: ${color || theme.colors.dark};
  `}
`;
