import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Platform,StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function HomeScreen(props) {
    return (
     <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.titleText}> Welcome </Text>  
        <Text style={styles.titleText}> Kick Start your Startup</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
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
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#90CAF9',
        justifyContent:"flex-end",    
    },
    icon : {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:20,
        marginRight:30
    },
    text : {
        alignItems:"center",
        bottom : 500,
        fontSize :40
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold"
    },
     homeicon : {
        alignItems:"baseline",
        position:"absolute",
        marginHorizontal:20,
        marginLeft:30,
        bottom:3
     },
     dollaricon : {
         alignItems:"center",
         position : "absolute",
         marginLeft:130,
         bottom:5
     },
     messageicon : {
        alignItems:"center",
        position : "absolute",
        marginLeft:200, 
        bottom:5  
     },
     usericon : {
        alignItems:"center",
        marginLeft:300,
        position : "absolute",
        bottom:5
     },

})
export default HomeScreen;