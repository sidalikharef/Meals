import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => (
<SafeAreaView style={styles.safe}>
        <View style={styles.search}>
          <Searchbar />
        </View>

        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
);

const styles = StyleSheet.create({
    safe: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    ontainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    search: {
      padding: 16
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue",
    },
  });