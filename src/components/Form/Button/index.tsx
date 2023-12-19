import React from "react";
import { Container, Title } from "./styles";
import { TextProps, TouchableOpacityProps } from "react-native";


interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}


export const Button: React.FunctionComponent<Props> = ({
  title,
  color,
  bgColor,
  borderColor,
  ...otherProps
}) => {
  return <Container bgColor={bgColor} borderColor={borderColor} {...otherProps}>
    <Title color={color}>{title}</Title>
  </Container>;
};
