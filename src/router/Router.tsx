import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Events, EventDetail} from '@pages';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="Event" component={Events} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
