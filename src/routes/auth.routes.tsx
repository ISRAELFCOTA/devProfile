import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';

const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{ presentation: 'transparentModal' }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{ presentation: 'transparentModal' }}
      />
      <Auth.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ presentation: 'transparentModal' }}
      />
      <Auth.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ presentation: 'transparentModal' }}
      />
    </Auth.Navigator>
  );
};
