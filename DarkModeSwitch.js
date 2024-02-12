//DarkModeSwitch.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => {
    return (
        <View style={styles.darkModeSwitch}>
            <Text style={darkMode ? styles.darkText : styles.lightText}>Dark Mode</Text> 
            <Switch value={darkMode} onValueChange={toggleDarkMode} /> 
        </View>
    );
};

const styles = StyleSheet.create({
    darkModeSwitch: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 10,
    },
    darkText: {
        color: '#fff', // Fixed syntax: color value should be in quotes
    },
    lightText: {
        color: "#000",
    },
});

export default DarkModeSwitch;
