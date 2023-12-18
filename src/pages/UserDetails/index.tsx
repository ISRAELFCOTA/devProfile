import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Container } from './styles';
import { IUser } from '../../model/user';
import { api } from '../../services/api';

interface RouteParams {
  userId: string;
}

export const UserDatails: React.FunctionComponent = () => {
  const [userDetails, setUserDetails] = React.useState<IUser>({} as IUser);
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  React.useEffect(()=> {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setUserDetails(response.data);
    }
    loadUser();
  },[userId]);
  return <Container></Container>;
};
