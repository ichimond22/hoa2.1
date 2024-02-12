// Goallist.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const GoalList = ({ goals, darkMode, removeGoalHandler }) => {
  return (
    <View>
      <Text style={[styles.sectionTitle, darkMode && styles.whiteText]}>List of Goals</Text>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={{ color: darkMode ? '#fff' : '#000' }}>{item.text}</Text>
            <Button title="Remove" onPress={() => removeGoalHandler(item.key)} color="red" />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000", // Default text color
  },
  whiteText: {
    color: "#fff",
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
  },
});

export default GoalList;
