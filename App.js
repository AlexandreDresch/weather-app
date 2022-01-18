import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <ImageBackground source={require()}></ImageBackground>
        </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});