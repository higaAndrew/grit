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
import styles from './styles/stylesheet';

const SelectedTask = ({ navigation }) => {
const context = useContext(AppContext);

    return (
        <View style={styles.screen}>
            <Text>Selected Task</Text>
            <Button
                title='Complete Task'
                onPress={() => navigation.navigate('CompleteTask')}
            />
            <Button
                title='Delete Task'
                onPress={() => navigation.navigate('DeleteTask')}
            />
            <Button
                title='Back to Tasklist'
                onPress={() => navigation.navigate('Tasklist')}
            />
            <FlatList
                data={ context.tasks }
                renderItem={({ item }) => (
                    <View style={ styles.listItem }>
                        <Text>{ item.value + '\n' }{ item.date }</Text>
                        <Button
                            title="Edit"
                            onPress={() => navigation.navigate('EditTask', {
                                prevScreen: 'SelectedTask',
                            })}
                        />
                    </View>
                )}
                keyExtractor={ (item) => item.id }
            />
        </View>
    );
};

export default SelectedTask;