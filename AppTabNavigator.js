import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddItemScreen from '../screens/AddItemScreen';
import ViewItemScreen from '../screens/ViewItemScreen';



export const AppTabNavigator = createBottomTabNavigator({
  AddItems : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Items",
    }
  },
  ViewItems: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "View Items",
    }
  }
});
