import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class PostEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  _onHomePress = () => {
    Alert.alert(
      "Hola",
      "Ya te encuentras ahí",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }


  render(){
    return( 
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={styles.content}>
          <Text style={styles.text}>
            Post Edit
          </Text>
        </View>
      </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
  text: {
    fontSize:30, 
    fontWeight:'bold', 
    // color:'#fff',
    textAlign:'center'
  },
  content: {
    margin: width/20,
    height:width/2.5,
    width:width/2.5,
    borderRadius:15,
    justifyContent:'center',
  }
})