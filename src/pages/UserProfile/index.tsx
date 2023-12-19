import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Container,
  Content,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTitle,
  HeaderTop,
  Icon,
  IconPhoto,
  NameData,
  NameTitle,
  PhotoButton,
  PhotoContainer,
  UserAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/Form/Button';

interface ScreenNavigationProps {
  goBack: () => void;
}

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth();
  const { goBack } = useNavigation<ScreenNavigationProps>();

  return (
    <Container>
      <Header>
        <HeaderTop>
          <GoBackButton onPress={goBack}>
            <Icon name="chevron-left" />
          </GoBackButton>
          <HeaderTitle>Seu Perfil</HeaderTitle>
        </HeaderTop>

        <PhotoContainer>
          <UserAvatar
            source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
          />
          <PhotoButton>
            <IconPhoto name="camera" />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{user.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{user.email}</EmailData>
        </UserEmailDetail>

        <Button bgColor='#121214' color='#f1f1f1' title='Editar dados do perfil' onPress={()=> {}}/>
        <Button borderColor='#a8a8b3' bgColor='#121214' color='#a8a8b3' title='Trocar senha' onPress={()=> {}}/>
      </Content>
    </Container>
  );
};
