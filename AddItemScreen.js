import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/MyHeader'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class AddItemScreen extends Component{
  constructor(){
    super();
    this.state ={
      //listName:this.props.listName,
      listName:"Mall",
      MyItem:'',
      Quantity:''
    }
  }




  addToList =(MyItems,Quantity)=>{
    db.collection('ShaoppingList').doc("Mall").add({
      MyItems:MyItems,
      'Quantity':Quantity
    })

    this.setState({
        MyItem :'',
        Quantity : ''
    })

    return Alert.alert("Item Requested Successfully")
  }


  render(){
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
          <MyHeader title="Mall"/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter item"}
                onChangeText={(text)=>{
                    this.setState({
                        MyItem:text
                    })
                }}
                value={this.state.MyItem}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                placeholder={"How Many?"}
                onChangeText ={(text)=>{
                    this.setState({
                        Quantity:text
                    })
                }}
                value ={this.state.Quantity}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addToList(this.state.MyItem,this.state.Quantity)}}
                >
                <Text>Add</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
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
  }
)