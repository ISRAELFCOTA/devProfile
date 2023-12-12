import React from 'react';
import {
  Container,
  Content,
  Logo,
  Title,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  CreateAccount,
  Icon,
  CreateAccountTitle,
} from './styles';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Alert,
} from 'react-native';
import { Button } from '../../components/Form/Button';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '../../context/AuthContext';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('Email inválido.').required('Informe o email'),
  password: yup.string().required('Informe a senha'),
});

export const SignIn: React.FunctionComponent = () => {
  const { signIn } = React.useContext(AuthContext);
  const [loading, setloading] = React.useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    try {
      setloading(true);
      signIn(data);
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro fazer login, verifique as credenciais.',
      );
    }
  };
  const { navigate } = useNavigation<ScreenNavigationProp>();
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
            <View>
              <Title>Faça seu Login</Title>
            </View>

            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
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
            <Button
              title="Entrar"
              activeOpacity={0.7}
              disabled={loading || !!errors.email || !!errors.password}
              onPress={handleSubmit(handleSignIn)}
            />
            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount
        onPress={() => {
          navigate('SignUp');
        }}
      >
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};
