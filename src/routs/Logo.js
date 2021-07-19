import * as React from 'react';
import { Image, Dimensions } from 'react-native';
import { theme } from '../constants'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const { colors } = theme

export const LogoTitle = () => {
  return (
    <Image
      resizeMode='contain'
      style={Platform.OS === 'ios'?
      { width: width/1.5, height: height/12, alignSelf:'center', shadowColor:'white', shadowOffset:{width:0, height:2}, shadowOpacity:0.5, shadowRadius:2}:
      { left: -width/40, width: width/1.5, height: height/12, }
    }
      source={require('../assets/images/logo.png')}
    />
  );
}