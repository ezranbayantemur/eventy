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
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name="Event"
          component={Events}
          options={{
            title: 'eventy',
            headerTintColor: '#00BCD4',
          }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetail}
          options={{
            headerTintColor: '#00BCD4',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
