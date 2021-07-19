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
import { connect } from 'react-redux'
import { Avatar, Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import { actions } from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      photoURL:'',
      name:''
    }
  }

  componentDidMount = ()=>{
    const { user } = this.props
    console.log('user profile: '+JSON.stringify(user))
    this.setState({
      email: user.providerData[0].email,
      photoURL: user.providerData[0].photoURL,
      name: user.providerData[0].displayName
    })
  }

  render(){
    const { email, photoURL, name } = this.state
    return( 
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ImageBackground
          style={{height, justifyContent:'center', alignItems:'center'}}
          source={require('../assets/images/fondo1.jpg')}
        >
          <View style={styles.content}>
              <Avatar 
                rounded
                source={{uri:photoURL}}
                size='xlarge'
              />

              <View style={styles.dataContainer}>
                <Text style={styles.infoText}>{email}</Text>
                <Text style={styles.infoText}>{name}</Text>
                <View style={{ width:width*0.8, marginTop:'10%'}}>
                  <Button title='Salir' onPress={()=>{
                    auth()
                    .signOut()
                    .then(async() => {
                      console.log('User signed out!'),
                      this.props.setUser({user:null})
                      try {
                        await AsyncStorage.delItem('isloged')
                      } catch (e) {
                        console.log('ubo un error :'+e)
                      }

                    })
                  }} />
                </View>
              </View>
              
          </View>
          
        </ImageBackground>
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
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  dataContainer:{
    top:50,
    width,
    justifyContent:'center',
    alignItems:'center',
  },
  infoText:{
    textAlign:'center',
    fontSize:18,
    color:'white'
  }
})

const mapDispatchToProps = dispatch => ({
  setUser: ({user}) => 
  dispatch(actions.user.setUser({user})),
})

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps,mapDispatchToProps)((Profile))
