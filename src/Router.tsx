import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import FavoritedJobs from './pages/FavoritedJobs'


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function JobsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#ef5350',
        }}
        name='Jobs' component={Jobs} />
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#ef5350',
        }}
        name='JobsDetail' component={JobsDetail} />
    </Stack.Navigator>
  );
}
function FavoritedScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='Favorited' component={FavoritedJobs} />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveTintColor: 'red' }}>
        <Drawer.Screen name='JobsScreen' component={JobsScreen} />
        <Drawer.Screen name='FavoriteScreen' component={FavoritedScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Router;