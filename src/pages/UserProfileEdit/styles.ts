import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`;
export const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
export const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  margin-left: auto;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 24px;
`;

export const Logo = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  margin-bottom: ${RFValue(64)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray800};
`;

