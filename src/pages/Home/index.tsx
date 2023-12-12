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
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';

export const Home: React.FunctionComponent = () => {
  const { user } = useAuth();

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

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};
