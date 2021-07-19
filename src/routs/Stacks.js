import React,{ Component } from 'react';
import Uno from '../screens/Uno'
import Dos from '../screens/Dos'
import Tres from '../screens/Tres'
import Cuatro from '../screens/Cuatro'
import Profile from '../screens/Profile'
import { createStackNavigator } from '@react-navigation/stack';


const UnoStack = createStackNavigator();

const UnoStackScreen = () => {
  return(
    <UnoStack.Navigator>
      <UnoStack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <UnoStack.Screen name="Uno" component={Uno} />
      <UnoStack.Screen name="Dos" component={Dos} />
    </UnoStack.Navigator>
  )
}

const DosStack = createStackNavigator();

export const DosStackScreen = () => {
  return(
    <DosStack.Navigator>
      <DosStack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <DosStack.Screen name="Tres" component={Tres} />
      <DosStack.Screen name="Cuatro" component={Cuatro} />
    </DosStack.Navigator>
  )
}

const Stack = createStackNavigator();

export default AppStack = (props) => {
  const isloged = true
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={UnoStackScreen} />
      <Stack.Screen name="Otro" component={DosStackScreen} />
    </Stack.Navigator>
  )
}