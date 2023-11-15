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

const DeleteTask = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>Delete Task</Text>
            <Button
                title='Back to Selected Task'
                onPress={() => navigation.navigate('SelectedTask')}
            />
        </View>
    );
};

export default DeleteTask;