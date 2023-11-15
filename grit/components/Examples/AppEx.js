import {
    React,
    useState,
    useEffect,
} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeEx';
import CreatePostScreen from './PostEx';
import DetailsScreen from './DetailsEx';

const Stack = createStackNavigator();



const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    initialParams={{itemId: 42}}
                />
                <Stack.Screen
                    name="Post"
                    component={CreatePostScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'rgb(59, 108, 212)',
        fontSize: 42,
        fontWeight: '100',
        textAlign: 'center',
    },
});

export default App;
