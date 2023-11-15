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

const TaskSettings = ({ navigation, route }) => {
    return (
        <View style={styles.default}>
            <Text>Task Settings</Text>
            <Button
                title='Back to Edit Task'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default TaskSettings;