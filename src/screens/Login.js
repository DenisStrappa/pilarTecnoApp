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
} from 'react-native';
import { Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { actions } from '../store';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width



class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
    console.log('init app')
    GoogleSignin.configure({
      webClientId: '608615533283-idc1r6kdbd9nt5lelcq4o2pel36101di.apps.googleusercontent.com',
    });
  }

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('Google Credeentials: '+JSON.stringify(googleCredential))
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  render(){
    return( 
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="dark-content" style={{backgroundColor:'grey'}} />
      <View style={styles.content}>
        <ImageBackground style={styles.backImage} source={require('../assets/images/fondo1.jpg')}>
          <View>
            <Text style={styles.text}>Ingresa con tus Redes Sociales</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button style={styles.button} title='Continuar con Google...' onPress={()=>this.onGoogleButtonPress().then(async(data)=>{

              console.log('Signed in with Google!')
              if(data){
                console.log('res login: '+JSON.stringify(data.user))
                try {
                  await AsyncStorage.setItem('isloged', JSON.stringify(data.user))
                } catch (e) {
                  console.log('ubo un error :'+e)
                }
                this.props.setUser(data.user)
            }
            })} />
            <Button style={styles.button} title='Continuar con Facebook...'/>
          </View >
        </ImageBackground>
        </View>

    </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
  content:{
    flex:1,
  },
  backImage:{
    height,
    width,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize:30, 
    fontWeight:'bold', 
    textAlign:'center',
    color:'white'
  },
  button: {
    margin: width/20,
    borderRadius:15,
    width:width/1.5,
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1
  },
  buttonsContainer:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:20
  }
})

const mapDispatchToProps = dispatch => ({
  setUser: (data) => 
  dispatch(actions.user.setUser(data)),
})

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps,mapDispatchToProps)((Login))

