import {
    React,
    useContext,
} from 'react';
import {
    Button,
    FlatList,
    Text,
    View,
} from 'react-native';

// IMPORT PICKER SELECTION
import RNPickerSelect from 'react-native-picker-select';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const EditTask = ({ navigation, route }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);
    const { selectedId } = route.params;
    // RETRIEVING THE SELECTED TASK FROM TASKS
    const data = context.tasks.findIndex(item => item.id === selectedId);

    // RENDERING
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
                placeholder={{ }}
                style={styles.pickerAndroid}
                value={ context.tasks[data].priority }
                onValueChange={(value) => {
                    if (context.tasks[data].priority !== value) {
                        console.log('The priority of ' + context.tasks[data].value + ' has been set to ' + value)
                        context.handleSaveEdit(selectedId, context.tasks[data].value, value)
                    }
                }}
                items={[
                    { label: 'High', value: 'High' },
                    { label: 'Normal (Default)', value: 'Normal' },
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