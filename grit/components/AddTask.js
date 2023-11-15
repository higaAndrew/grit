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

const AddTask = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>Add a Task</Text>
            <Button
                title='Edit Task'
                onPress={() => navigation.navigate('EditTask', {
                    prevScreen: 'AddTask',
                })}
            />
            <Button
                title='Back to Tasklist'
                onPress={() => navigation.navigate('Tasklist')}
            />
        </View>
    );
};

export default AddTask;