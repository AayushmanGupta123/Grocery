
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AddButton} from './Components/AddButton'
import {ClearButton} from './Components/ClearAllButton'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Grocery App</Text>
      <AddButton/>
      <ClearButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
