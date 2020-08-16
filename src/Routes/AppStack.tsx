import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstOnboarding from '../Pages/FirstOnboarding';
import SecondOnboarding from '../Pages/SecondOnboarding';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="FirstOnboarding" component={FirstOnboarding} />
        <Screen name="SecondOnboarding" component={SecondOnboarding} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;