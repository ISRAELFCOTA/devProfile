import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatarButton,
  UserAvatar,
  UserInfoDetail,
  UserGreeting,
  UserName,
  Icon,
  LogoutButton,
  UserList,
  UserListHeader,
  UserListEmpity,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { User } from '../../components/User';

interface ScreenNavigationProp {
  navigate: (screen: string, params?: unknown) => void;
}
export const Home: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState([]);
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  React.useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users');
      setUsers(response.data);
    };
    loadUsers();
  }, []);

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

  const handleUserDetails = (userId: string) => {
    navigate('UserDatails', { userId });
  };
  const HandleUserProfile = () => {
    navigate('UserProfile');
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={HandleUserProfile}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>

            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogoutButton onPress={handleSingOut}>
            <Icon name="log-out" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <UserList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <User data={item} onPress={() => handleUserDetails(item.id)} />
        )}
        ListHeaderComponent={<UserListHeader>Usuários</UserListHeader>}
        ListEmptyComponent={
          <UserListEmpity>Ops! Ainda não há registros.</UserListEmpity>
        }
      />
    </Container>
  );
};
