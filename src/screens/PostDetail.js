import React,{ Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  View,
  Alert
} from 'react-native';
import { actions } from '../store'
import { connect } from 'react-redux'
import { fetchComments, showPost } from '../api'
import { Button, Divider } from 'react-native-elements'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

class PostDetail extends React.Component {

  constructor(props) {
    super(props);
    const { item } = this.props.route.params
    this.state = {
      id: item.id,
      title: item.title,
      body: item.body,
      comments:[]
    }
  }

  componentDidMount = ()=>{
    fetchComments({id:this.state.id}).then($result=>{
      console.log('comentarios: '+JSON.stringify($result[1]))
      this.setState({
        comments: $result[1]
      })
    })
  }

  _onpresshandlere = ()=>{

    fetchComments({id:this.state.id}).then($result=>{
      console.log('comentarios: '+JSON.stringify($result[1]))
    })


  //   fetch(`${BASE_URL}/posts/1/comments`)
  // .then(Response =>{ 
  //   return Promise.all([Response, Response.json()])
  // }).then(result=> console.log('comentarios: '+JSON.stringify(result)))
  
}

keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
      <View style={{ margin:5, backgroundColor:'rgba(0,0,0,0.5)', borderRadius:8, padding:5}}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            {item.email}
          </Text>
        </View>
        <Divider />
        <View style={styles.bodycontainer}>
          <Text style={styles.text}>
            {item.body}
          </Text>
        </View>
      </View>
  )  

  render(){
    return( 
      <SafeAreaView style={{justifyContent:'center', alignItems:'center'}}>
        <View style={{flex:1}}>
          <ImageBackground
              style={{height, width}}
              source={require('../assets/images/fondo7.jpg')}
          >
            <View style={{flex:2}}>
              <View>
                <Text style={{fontSize:18, color:'white', fontWeight:'bold', textAlign:'center', marginVertical:5}}> Publicación</Text>
              </View>
              <ScrollView >
              <View style={{ margin:5, backgroundColor:'rgba(0,0,0,0.5)', borderRadius:8, padding:5}}>
                <View style={styles.titlecontainer}>
                  <Text style={styles.title}>
                    {this.state.title}
                  </Text>
                </View>
                <Divider />
                <View style={styles.bodycontainer}>
                  <Text style={styles.text}>
                    {this.state.body}
                  </Text>
                </View>
              </View>
              </ScrollView>
            </View>
            <View style={{flex:4}}>
          {
            !this.state.comments?
            <ActivityIndicator />
            :
            <View>
            <View>
              <Text style={{fontSize:18, color:'white', fontWeight:'bold', textAlign:'center', marginBottom:10, marginTop:-20}}> Comentarios</Text>
            </View>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.comments}
              renderItem={this.renderItem}
              style={{marginBottom:height/5+30,}}
            />
            </View>
            
          }
          </View>
        </ImageBackground>
      </View>

      </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
  text: {
    fontSize:14, 
    color:'#fff',
    textAlign:'center'
  },
  title: {
    fontSize:16, 
    fontWeight:'bold', 
    color:'#fff',
    textAlign:'center'
  },
  titlecontainer:{
    padding:10
  },
  bodycontainer:{
    padding:10
  },
  content: {
    margin: width/20,
    height:width/2.5,
    width:width/2.5,
    borderRadius:15,
    justifyContent:'center',
  }
})

const mapDispatchToProps = dispatch => ({
  // getPosts: () => 
  // dispatch(actions.posts.getPosts()),
})

const mapStateToProps = state => ({
  // posts: state.posts.posts,
})

export default connect(mapStateToProps,mapDispatchToProps)((PostDetail))