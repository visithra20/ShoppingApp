import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <Text>Profile </Text>
    </View>
    </SafeAreaView>
  );
};

export default Profile ;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
