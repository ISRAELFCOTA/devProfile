import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Container } from "./styles";
import theme from "../../../global/styles/theme";
import { Input } from "../Input";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export const InputControl: React.FunctionComponent<Props> = ({
  control,
  name,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...otherProps} />
        )}
        name={name}
      />
    </Container>
  );
};
