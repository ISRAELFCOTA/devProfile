import styled from "styled-components/native";

import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({theme})=> theme.colors.danger};
  font-size: ${RFValue(14)}px;
  margin-bottom: 16px;
`;
