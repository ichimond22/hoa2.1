import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Switch, ScrollView, FlatList, ImageBackground } from 'react-native';

const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <View style={styles.darkModeSwitch}>
      <Text style={darkMode ? styles.darkText : styles.lightText}>Dark Mode</Text> 
      <Switch value={darkMode} onValueChange={toggleDarkMode} /> 
    </View>
  );
};

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim() === '') {
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your Course Goal!'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText} />
      <Button title='Add Goal' onPress={addGoalHandler} color='#3f7579' /> 
    </View>
  );
};

const GoalItem = ({ item, onRemove }) => {
  return (
    <View style={styles.goalItem}>
      <Text>{item.text}</Text>
      <Button title='Remove' onPress={() => onRemove(item.key)} color='grey' />
    </View>
  );
};

const GoalListScrollView = ({ goals }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {goals.map((goal) => (
        <GoalItem key={goal.key} item={goal} />
      ))}
    </ScrollView>
  );
};

const GoalListFlatList = ({ goals }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={goals}
      renderItem={({ item }) => <GoalItem item={item} />}
      keyExtractor={(item) => item.key.toString()}
    />
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const addGoalHandler = (goalText) => {
    const newGoal = {
      text: goalText,
      key: Math.random().toString(),
    };  
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
  };

  const removeGoalHandler = (goalKey) => { 
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalKey)
    );
  };

  const backgroundImageSource = darkMode ? require('./assets/sung jin woo dark1.jpg') : require('./assets/cha hae light1.jpg');

  return (
    <ImageBackground
      source={backgroundImageSource}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Genabe List of Goals</Text> 
          </View>
          <GoalInput onAddGoal={addGoalHandler} />
          <GoalListScrollView goals={courseGoals} />
          {/* <GoalListFlatList goals={courseGoals} /> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  darkModeSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  darkText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  lightText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    color: '#fff',
  },
  /* 
  scrollView: {
    maxHeight: 500, // Limit the size of the scroll view
    maxWidth:300,
  },
  */
 
  flatList: {
    maxHeight: 500, // Limit the size of the flat list
    maxWidth:300,
  },
 
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
});

export default App;
