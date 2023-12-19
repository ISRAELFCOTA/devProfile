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
  name: yup.string().required('Informe nome completo'),
  email: yup.string().email('Email inválido.').required('Informe o email'),
});

export const UserProfileEdit: React.FunctionComponent = () => {
  const { user, updateUser } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email
    }
  });

  const handleEditProfile = async (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
    };

    try {
      const response = await api.put('profile', data);
      updateUser(response.data);
      Alert.alert(
        'PerfilAtualizado com sucesso',
        'Os dados do seu perfil foram atualizados.',
      );
      goBack();
    } catch (error) {
      Alert.alert(
        'Erro ao atualizar',
        'Ocorreu um erro ao atualizar o perfil, tente novamente',
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
            <Title>Editar dados do perfil</Title>
            <InputControl
              autoCapitalize="characters"
              autoCorrect={false}
              control={control}
              name="name"
              placeholder="Nome completo"
              error={errors.name && errors.name.message.toString()}
            />
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
              bgColor="#121214"
              color="#f1f1f1"
              title="Salvar"
              activeOpacity={0.7}
              onPress={handleSubmit(handleEditProfile)}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
