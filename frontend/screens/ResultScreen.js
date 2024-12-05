import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('DisplayResults')}
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

export default ResultScreen;
