import React from 'react';
import { Container, Content, Title } from './styles';
import { Input } from '../../components/Form/Input';
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
  email: yup.string().email('Email inválido.').required('Informe o email'),
});

export const ForgotPassword: React.FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });
  const { goBack, navigate } = useNavigation<ScreenNavigationProp>();

  const handleForgotPassword = async (form: IFormInputs) => {
    const data = {
      email: form.email,
    };

    try {
      await api.post('password/forgot', data);
      Alert.alert(
        'Email enviado',
        'Você receberá um email com as instruções para redefinição da senha.',
      );
      navigate('SignIn');
    } catch (error) {
      Alert.alert(
        'Erro no envio do email',
        'Ocorreu um erro ao enviar o email. Tente novamente',
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
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email.message.toString()}
            />

            <Button
              title="Enviar Email"
              activeOpacity={0.7}
              onPress={handleSubmit(handleForgotPassword)}
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
