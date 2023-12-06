import React from 'react';
import { Container, Content, Title } from './styles';
import { Input } from '../../components/Form/Input';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Logo, BackToSignIn, Icon, BackToSignTitle } from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';

interface ScreenNavigationProp {
  goBack: () => void;
}
interface IFormInputs {
  [name: string]: any;
}

export const SignUp: React.FunctionComponent = () => {
  const { handleSubmit, control } = useForm<FieldValues>();
  const handleSignIn = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  const { goBack } = useNavigation<ScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Crie sua conta</Title>
            <InputControl
              autoCapitalize="characters"
              autoCorrect={false}
              control={control}
              name="name"
              placeholder="Nome completo"

            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Senha"
              secureTextEntry
            />
            <Button
              title="Criar conta"
              activeOpacity={0.7}
              onPress={handleSubmit(handleSignIn)}
            />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignTitle>Voltar para Login</BackToSignTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
