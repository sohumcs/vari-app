import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (  
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Vegetation Classifier</Text>
      <Button
        title="Go to Results"
        onPress={() => navigation.navigate('ResultScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
