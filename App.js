import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
     <Text>starting</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:{
    flex:1,
  },
 ontainer:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
 },

});
