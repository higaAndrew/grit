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

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const DeleteTask = ({ navigation, route }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);
    const { selectedId } = route.params;
    
    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Are you sure you want to delete this task?</Text>
            <FlatList
                data= { context.tasks.filter(item => item.id === selectedId) }
                renderItem = {({ item }) => (
                    <View style={styles.listItem}>
                        <Text>{item.value + '\n'}{item.date}</Text>
                    </View>
                )}
                keyExtractor={ (item) => item.id }
            />
            <Button
                title='Yes, delete it!'
                onPress={() => {
                    context.handleRemoveTask(selectedId)
                    navigation.navigate('Tasklist')
                }}
            />
            <Button
                title='No, never mind'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DeleteTask;