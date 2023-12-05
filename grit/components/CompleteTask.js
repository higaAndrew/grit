import {
    React,
    useState,
    useContext,
} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const CompleteTask = ({ navigation, route }) => {
    const context = useContext(AppContext);

    const { selectedId } = route.params;

    return (
        <View style={styles.default}>
            <Text>Have you completed this task?</Text>
            <Button
                title='Ya'
                onPress={() => {
                    context.handleCompleteTask(selectedId);
                    navigation.navigate('Tasklist');
                }}
            />
        </View>
    );
};

export default CompleteTask;