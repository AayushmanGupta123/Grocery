import React from 'react';
import LottieView from 'lottie-react-native';

export default class GroceryList extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/groceries-basket.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}