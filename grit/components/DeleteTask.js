import {
    React,
    useContext,
    useEffect,
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
    const context = useContext(AppContext);

    useEffect(() => {
        if (route.params?.selectedId) {

        }
    }, [route.params?.selectedId]);
    
    return (
        <View style={styles.default}>
            <Text>Are you sure you want to delete this task?</Text>
            <FlatList
                data= { context.tasks.filter(item => item.id === route.params?.selectedId) }
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
                    context.removeTask(route.params?.selectedId)
                    navigation.navigate('Tasklist')
                }}
            />
            <Button
                title='No, never mind'
                onPress={() => navigation.navigate('SelectedTask')}
            />
        </View>
    );
};

export default DeleteTask;