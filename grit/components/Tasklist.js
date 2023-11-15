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

const Tasklist = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>Tasklist</Text>
            <Button
                title='Add Task'
                onPress={() => navigation.navigate('AddTask')}
            />
            <Button
                title='Select This Task'
                onPress={() => navigation.navigate('SelectedTask')}
            />
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Tasklist;