import React from 'react';
import { Container, Content, Title } from './styles';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button } from '../../components/Form/Button';
import { Logo, BackToSignIn, Icon, BackToSignTitle } from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';

interface ScreenNavigationProp {
  goBack: () => void;
  navigate(screen: string): void;
}
interface IFormInputs {
  [name: string]: any;
}
const formSchema = yup.object({
  token: yup.string().uuid('Código inválido.').required('Informe o código'),
  password: yup.string().required('Informe a nova senha'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirmação incorreta.'),
});

export const ResetPassword: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleResetPassword = async (form: IFormInputs) => {
    const data = {
      token: form.token,
      password: form.password,
      password_confirmation: form.password_confirmation,
    };

    try {
      await api.post('password/reset', data);
      Alert.alert(
        'Senha Redefinida',
        'A Senha for redefinida com sucesso. Efetue login para acessar.',
      );
      navigate('ResetPassword');
    } catch (error) {
      Alert.alert(
        'Erro na redefinição',
        'Ocorreu um erro ao redefinir a senha, tente novamente',
      );
    }
  };

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
            <Title>Redefinir a senha</Title>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="token"
              placeholder="Código"
              error={errors.email && errors.email.message.toString()}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Senha"
              secureTextEntry
              error={errors.password && errors.password.message.toString()}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password_confirmation"
              placeholder="Nova Senha"
              secureTextEntry
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message.toString()
              }
            />
            <Button
              title="Enviar"
              activeOpacity={0.7}
              onPress={handleSubmit(handleResetPassword)}
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
