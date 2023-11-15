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

const SelectedTask = ({ navigation, route }) => {
    return (
        <View style={styles.default}>
            <Text>Selected Task</Text>
            <Button
                title='Complete Task'
                onPress={() => navigation.navigate('CompleteTask')}
            />
            <Button
                title='Edit Task'
                onPress={() => navigation.navigate('EditTask', {
                    prevScreen: 'SelectedTask',
                })}
            />
            <Button
                title='Delete Task'
                onPress={() => navigation.navigate('DeleteTask')}
            />
            <Button
                title='Back to Tasklist'
                onPress={() => navigation.navigate('Tasklist')}
            />
        </View>
    );
};

export default SelectedTask;