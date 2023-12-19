import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { UserDatails } from '../pages/UserDetails';
import { UserProfile } from '../pages/UserProfile';
import { UserProfileEdit } from '../pages/UserProfileEdit';
import { UserProfilePassword } from '../pages/UserProfilePassword';

const App = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen
        name="Home"
        component={Home}
        options={{ presentation: 'transparentModal' }}
      />
      <App.Screen
        name="UserDatails"
        component={UserDatails}
        options={{ presentation: 'transparentModal' }}
      />
      <App.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ presentation: 'transparentModal' }}
      />
      <App.Screen
        name="UserProfileEdit"
        component={UserProfileEdit}
        options={{ presentation: 'transparentModal' }}
      />
      <App.Screen
        name="UserProfilePassword"
        component={UserProfilePassword}
        options={{ presentation: 'transparentModal' }}
      />
    </App.Navigator>
  );
};
