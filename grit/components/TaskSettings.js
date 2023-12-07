import {
    React,
} from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

import styles from './styles/stylesheet'

const TaskSettings = ({ navigation }) => {
    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Task Settings</Text>
            <Button
                title='Back to Edit Task'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default TaskSettings;