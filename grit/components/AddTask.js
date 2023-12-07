import {
    React,
    useContext,
} from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
} from 'react-native';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const AddTask = ({ navigation }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);
    
    // FUNCTION DEFINITONS
    const setTaskText = () => {
        // Adding text if a task has been added or not
        if (context.tasks.length == 0) {
            return "Add your first task";
        }
        return "Add another task";
    };

    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Add a Task</Text>
            <Button
                title='Cancel'
                onPress={() => navigation.goBack()}
            />
            <View style={ styles.inputContainer }>
                <TextInput
                    placeholder={ setTaskText() }
                    style={ styles.input }
                    onChangeText={ context.setTask }
                    value={ context.task }
                />
                <Button
                    title='ADD'
                    onPress={ () => {
                        context.handleAddTask();
                    } }
                    disabled={ context.task.length==0 }
                />
            </View>
        </View>
    );
};

export default AddTask;