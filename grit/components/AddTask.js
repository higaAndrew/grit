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

import { Modal } from 'react-native';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const AddTask = ({ navigation }) => {
    const context = useContext(AppContext);

    /* Adding text if a task has been added or not */
    const setTaskText = () => {
        if (context.tasks.length == 0) {
            return "Add your first task";
        }
        return "Add another task";
    };

    // BUTTON DEFINITION
    const addButton1 = () => {
        context.handleAddTask;
    };
    const addButton2 = () => {
        () => context.setModalVisible(true);
    };
    const addButton = () => {
        addButton1();
        addButton2();
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
                <Modal
                    animationType='slide'
                    transparent={ true }
                    visible={ context.modalVisible }
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        context.setModalVisible(!context.modalVisible);
                    }}>
                    <View style={styles.centered}>
                        <View style={styles.modal}>
                            <Text style={styles.modalText}>Task added!</Text>
                            <Button
                                title='Ok'
                                onPress={ () => context.setModalVisible(!context.modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>
                <Button
                    title='ADD'
                    onPress={ () => {
                        context.handleAddTask();
                        context.setModalVisible(true);
                    } }
                    disabled={ context.task.length==0 }
                />
            </View>
        </View>
    );
};

export default AddTask;