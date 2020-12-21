
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GroceryList from '../Components/GroceryList'
import AddButton from './Components/AddButton'
import {ClearButton} from './Components/ClearAllButton'

export default class WelcomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <GroceryList></GroceryList>
                    <Text style={styles.title}>Grocery List</Text>
                </View>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{this.props.navigation.navigate('AddItem',{'listname':'Mall'})}}
                        >
                        <Text>Mall</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{this.props.navigation.navigate('AddItem',{'listname':'Market'})}}
                        >
                        <Text>Market</Text>
                      </TouchableOpacity>
        
            </View>
          );      
    }

}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
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
        fontFamily:'font-awesome',
        color:'green'
    }
  }
);
