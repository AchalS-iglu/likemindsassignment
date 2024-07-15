import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Home from './src/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/Details';
import History from './src/History';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Home}
          options={{title: 'Search'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Details',
          }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{
            title: 'History',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
