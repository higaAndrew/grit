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

import styles from './styles/stylesheet'

const About = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>About</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default About;