import React from "react"
import { StyleSheet, Text, View, Image,TouchableOpacity, Button } from "react-native"
import Expo from "expo"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as Google from 'expo-google-app-auth';

export default class WelcomeScreen extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        
        androidClientId: "1047995966846-pfd4dj82ekuiue2la5khil1afnkupg81.apps.googleusercontent.com",
        iosClientId:"1047995966846-jivsq8tabdof7tijq253346p8qpar1ge.apps.googleusercontent.com"
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }


    
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          //<HomeScreen/>
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google"  onPress={() => props.signIn()} />
      </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container_welcome}>
       <View style={styles.text}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Text style={styles.titleText}> Kick Start your Startup</Text>
      </View>
      <View style={styles.icon}> 
            <TouchableOpacity onPress={()=>console.log("Home icon pressed")}>
                <Entypo name="home" size={60} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("Dollar icon pressed")}>
                <FontAwesome name="dollar" size={55} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("message icon pressed")}>
                <MaterialCommunityIcons name="message-text" size={60} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("user icon pressed")}>
                <FontAwesome name="user" size={60} color="black" />
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EF9A9A",
    alignItems: "center",
    justifyContent: "center"
  },
  text : {
    alignItems:"center",
    justifyContent: "center",
    fontSize :40,
    bottom : 200,
},
titleText: {
  fontSize: 30,
  fontWeight: "bold"
},
button :{
width:"100%",
height:"100%"
},
  container_welcome:{
    flex: 1,
    backgroundColor: '#90CAF9',
    justifyContent:"flex-end",
    //position:"absolute",
    height:"100%",
    width:"100%"
  },
  message:{
    position:"absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  
  icon : {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:20,
    marginRight:30
},
  header: {
    fontSize: 25,
    alignItems:"baseline",
  },
  image: {
    marginTop: 15,
    width: 120,
    height: 120,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})