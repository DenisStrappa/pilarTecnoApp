
import React,{ Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeStackScreen } from './HomeStack'
import { ProfileStackScreen } from './ProfileStack'
import { MapStackScreen } from './MapStack'
import { PostsStackScreen } from './PostsStack'
import { Icon } from 'react-native-elements'
import { theme } from '../constants'


const TopTab = createMaterialTopTabNavigator();

function HomeTabs() {
  
  return (
    <TopTab.Navigator  tabBarOptions={{
      indicatorContainerStyle:{backgroundColor:'#8d2d84', fontWeight:'bold'},
      // indicatorContainerStyle:{backgroundColor:'white'},
      activeTintColor:'white',
      labelStyle:{fontWeight:'bold'},
      // activeTintColor:'#00ecfe',
      indicatorStyle:{backgroundColor:'white', fontWeight:'bold'}
    }}>
      <TopTab.Screen name="Emergencia" component={HomeScreen} />
      <TopTab.Screen name="Alarmas Silenciosas" >
        {(props)=> <AlertStackScreen {...props}  />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
}