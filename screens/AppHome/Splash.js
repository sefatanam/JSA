import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Splash = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
