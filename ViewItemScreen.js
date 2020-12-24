import React,{Component} from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../Components/MyHeader'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class AddItemScreen extends Component{
  constructor(){
    super();
    this.state ={
      //listName:this.props.listName,
      //listName:"Market",
      MyItem:'',
      Quantity:'',
      MarketList:[]
    }
    this.listRef = null;
  }
  getList = () => {
    this.listref = db.collection("Market").onSnapshot((snapshot) => {
      var newList = snapshot.doc.map(document => document.data());
      this.setState({MarketList:newList})
    })
  }
  componentDidMount(){
    this.getList();
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.ItemName}
        subtitle={item.Quantity}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }



  addToList =(MyItems,Quantity)=>{
    db.collection('Market').add({
      ItemName:MyItems,
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
          <MyHeader title="Market"/>
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
                style ={styles.formTextInput}
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
            <View style={{flex:1}}>
          {
            this.state.MarketList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>Mall List</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.MarketList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
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