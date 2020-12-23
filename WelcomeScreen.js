import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import GroceryList from '../Components/GroceryList'
//import AddButton from './Components/AddButton'
//import {ClearButton} from './Components/ClearAllButton'

export default class WelcomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                <Image source={require("../assets/v1.jpg")} style={{width:200, height:280}}/>
                    <Text style={styles.title}>Grocery List</Text>
                </View>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{this.props.navigation.navigate('AddItems')}}
                        >
                        <Text style={styles.textStyle}>Mall</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{this.props.navigation.navigate('AddItems',{'listName':'Market'})}}
                        >
                        <Text style={styles.textStyle}>Market</Text>
                      </TouchableOpacity>
        
            </View>
          );      
    }

}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#581845",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
    title:{
        fontSize:65,
        fontWeight:'bold',
        
        color:'#115839'
    },
    textStyle:{
      fontSize:20,
      color:'#ffffff'
    }
  }
);
