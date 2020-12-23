import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddItemScreen from '../Screens/AddItemScreen';
import ViewItemScreen from '../Screens/ViewItemScreen';

export const AppTabNavigator = createBottomTabNavigator({
  AddItems : {
    screen: AddItemScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Items",
    }
  },
  ViewItems: {
    screen: ViewItemScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "View Items",
    }
  }
});
