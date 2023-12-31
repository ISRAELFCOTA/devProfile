import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(28)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(24)}px;
`;
export const IconPhoto = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(24)}px;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
export const UserAvatar = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin-left: auto;
`;

export const PhotoContainer = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin: ${RFValue(48)}px auto;
`;

export const PhotoButton = styled.TouchableOpacity`
  background-color: #a8a8b2;
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${RFValue(-16)}px;
  right: ${RFValue(-16)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(48)}px ${RFValue(24)}px;
  margin-top: ${RFValue(64)}px;
`;

export const UserNameDetail = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  margin-bottom: 16px;
  border-radius: 10px;
`;
export const NameTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;
export const NameData = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;

export const UserEmailDetail = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
`;
export const EmailTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;
export const EmailData = styled.Text`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;
