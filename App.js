import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, useWindowDimensions } from 'react-native';

const App = () => {

    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    return (
        <ScrollView>
            <View style={{width: windowWidth, height: windowHeight}}>
            <ImageBackground source={require('./assets/night01.jpg')} style={{flex:1}} />
            </View>
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