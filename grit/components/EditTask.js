import {
    React,
    useState,
    useEffect,
    useContext,
} from 'react';
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const EditTask = ({ navigation, route }) => {
    const context = useContext(AppContext);

    const { selectedId } = route.params;
    const data = context.tasks.findIndex(item => item.id === selectedId);


    return (
        <View style={styles.screen}>
            <Text>Edit Task</Text>
            <FlatList
                data={ context.tasks.filter(item => item.id === selectedId) }
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text>{ item.value + '\n' }{ item.date + '\n' }{ 'Priority: ' + item.priority }</Text>
                    </View>
                )}
                keyExtractor={ (item) => item.id }
            />
            <RNPickerSelect
                style={styles.pickerAndroid}
                value={context.tasks[data].priority}
                onValueChange={(value) => {
                    console.log('The priority of ' + context.tasks[data].value + ' has been set to ' + value)
                    context.handleSaveEdit(selectedId, context.tasks[data].value, value)
                }}
                items={[
                    { label: 'Urgent', value: 'Urgent' },
                    { label: 'Normal', value: 'Normal' },
                    { label: 'Low', value: 'Low' },
                ]}
            />
            <Button
                title='Task Settings'
                onPress={() => navigation.navigate('TaskSettings')}
            />
            <Button
                title='Go Back'
                onPress={() => navigation.goBack()}
            />
            
        </View>
    );
};

export default EditTask;