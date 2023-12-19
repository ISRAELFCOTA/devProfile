import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { UserDatails } from '../pages/UserDetails';
import { UserProfile } from '../pages/UserProfile';

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
    </App.Navigator>
  );
};
