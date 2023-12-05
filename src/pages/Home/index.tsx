import React from "react";
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
} from "./styles";

import avatarDefault from "../../assets/avatar02.png";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UberAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UberAvatarButton>

            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Israel</UserName>
            </UserInfoDetail>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};
