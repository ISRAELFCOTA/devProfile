import React from 'react';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UberAvatarButton,
  UserAvatar,
  UserInfoDetail,
  UserGreeting,
  UserName,
  Icon,
  LogoutButton,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';
import { Alert } from 'react-native';

export const Home: React.FunctionComponent = () => {
  const { user, signOut } = useAuth();

  const handleSingOut = () => {
    Alert.alert('Tem certeza?', 'deseja se deslogar?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UberAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UberAvatarButton>

            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogoutButton onPress={handleSingOut}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
};
