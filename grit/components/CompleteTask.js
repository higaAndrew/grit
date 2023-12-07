import {
    React,
    useContext,
} from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const CompleteTask = ({ navigation, route }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);
    const { selectedId } = route.params;

    // RENDERING
    return (
        <View style={styles.screen}>
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