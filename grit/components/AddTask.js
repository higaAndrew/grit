import {
    React,
    useContext,
} from 'react';
import {
    Button,
    FlatList,
    Text,
    TextInput,
    View,
} from 'react-native';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const AddTask = ({ navigation }) => {
    const context = useContext(AppContext);

    const setTaskText = () => {
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
                title='Back to Tasklist'
                onPress={() => navigation.navigate('Tasklist')}
            />
            <View style={ styles.inputContainer }>
                <TextInput
                    placeholder={ setTaskText() }
                    style={ styles.input }
                    onChangeText={ context.setTask }
                    value={ context.task }
                />
                <Button
                    title="ADD"
                    onPress={ context.addTask }
                    disabled={ context.task.length==0 }
                />
            </View>
        </View>
    );
};

export default AddTask;