import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import Home from 'app/screens/Home';

const Stack = createStackNavigator();

const App = props => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
            safeAreaInsets: { top: 0, bottom: 0 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
