import React, { Component } from 'react';
import Profile from '../screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                title: 'Profile',
                headerStyle: {
                    backgroundColor: `rgba( 18, 25, 29, .8)`,
                },
                headerTintColor: 'rgb(118, 166, 195)',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            />
        </ProfileStack.Navigator>
    )
}