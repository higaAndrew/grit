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

const CompleteTask = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>Complete Task</Text>
            <Button
                title='Back to Selected Task'
                onPress={() => navigation.navigate('SelectedTask')}
            />
        </View>
    );
};

export default CompleteTask;