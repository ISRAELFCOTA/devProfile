import React from 'react';
import {
  Container,
  Content,
  GoBackButton,
  Header,
  HeaderTitle,
  Title,
  UserAvatar,
  Icon,
} from './styles';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button } from '../../components/Form/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { InputControl } from '../../components/Form/InputControl';
import avatarDefault from '../../assets/avatar02.png';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';

import { useAuth } from '../../context/AuthContext';

interface ScreenNavigationProp {
  goBack: () => void;
}
interface IFormInputs {
  [name: string]: any;
}
const formSchema = yup.object({
  oldPassword: yup.string().required('Campo obrigatório'),
  Password: yup.string().required('Informe a nova senha'),
  Password_confirmation: yup
  .string()
  .required('Informe a nova senha')
  .oneOf([yup.ref('password'), null, 'Senhas não condizem'])
});

export const UserProfilePassword: React.FunctionComponent = () => {
  const { user, updateUser } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleUpdatePassword = async (form: IFormInputs) => {
    const data = {
      name: user.name,
      email: user.email,
      oldPassword: form.oldPassword,
      password: form.password,
      Password_confirmation: form.Password_confirmation,
    };

    try {
      const response = await api.put('profile', data);
      updateUser(response.data);
      Alert.alert(
        'Senha atualizada com sucesso',
        'Sua senha foi redefinida com sucesso.',
      );
      goBack();
    } catch (error) {
      Alert.alert(
        'Erro ao atualizar senha',
        'Ocorreu um erro ao atualizar sua senha, tente novamente',
      );
    }
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
          <Header>
            <GoBackButton onPress={goBack}>
              <Icon name="chevron-left" />
            </GoBackButton>
            <HeaderTitle>Seu perfil</HeaderTitle>
            <UserAvatar
              source={
                user.avatar_url
                  ? { uri: user.avatar_url }
                  : avatarDefault
              }
            />
          </Header>
          <Content>
            <Title>Redefinir senha</Title>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="oldPassword"
              placeholder="Senha atual"
              error={errors.oldPassword && errors.oldPassword.message.toString()}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Nova senha"
              error={errors.password && errors.password.message.toString()}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="Password_confirmation"
              placeholder="Confirmar senha"
              error={errors.Password_confirmation && errors.Password_confirmation.message.toString()}
            />

            <Button
              bgColor="#121214"
              color="#f1f1f1"
              title="Salvar"
              activeOpacity={0.7}
              onPress={handleSubmit(handleUpdatePassword)}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
