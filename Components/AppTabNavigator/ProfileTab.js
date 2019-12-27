import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ProfileTab = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileTab</Text>
    </View>
  );
}

export default ProfileTab;