
import React,{ Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackScreen } from './HomeStack'
import { ProfileStackScreen } from './ProfileStack'
import { MapStackScreen } from './MapStack'
import { PostsStackScreen } from './PostsStack'
import { Icon } from 'react-native-elements'
import { theme } from '../constants'


const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  const { colors } = theme
  return (
   
      <Tab.Navigator 
        activeColor= {colors.active}//'#f5c511' //'rgb(41,34,97)',
        inactiveColor= {colors.inactive}
        barStyle={{
          backgroundColor:colors.bar
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileStackScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Posts" component={PostsStackScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'marker'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Map" component={MapStackScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}