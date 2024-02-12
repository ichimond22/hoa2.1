//GoalItem.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GoalItem = ({ item, onRemove }) => {
  return (
    <View style={styles.goalItem}>
      <Text>{item.text}</Text>
      <Button title='Remove' onPress={() => onRemove(item.key)} color='grey' />
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'transparent', // Set background color to transparent
  },
});

export default GoalItem;
