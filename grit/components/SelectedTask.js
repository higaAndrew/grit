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
import styles from './styles/stylesheet';

const SelectedTask = ({ navigation, route }) => {
    const context = useContext(AppContext);

    useEffect(() => {
        if (route.params?.selectedId) {

        }
    }, [route.params?.selectedId]);

    return (
        <View style={styles.screen}>
            <Text>Selected Task: {route.params?.selectedId}</Text>
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
                title='Complete Task'
                onPress={() => navigation.navigate('CompleteTask')}
            />
            <Button
                title='Delete Task'
                onPress={() => navigation.navigate({
                    name: 'DeleteTask',
                    params: {selectedId: route.params?.selectedId}
                    }
                )}
            />
            <Button
                title='Back to Tasklist'
                onPress={() => navigation.navigate('Tasklist')}
            />
        </View>
    );
};

export default SelectedTask;