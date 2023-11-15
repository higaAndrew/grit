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

const Settings = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>Settings</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Settings;