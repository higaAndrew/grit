import {
    React,
    useContext,
    useState,
} from 'react';
import {
    Button,
    FlatList,
    Text,
    View,
} from 'react-native';

// IMPORT BOUNCY CHECKBOX
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import AppContext from './AppContext';
import styles from './styles/stylesheet';

const SelectedTask = ({ navigation, route }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);
    const { selectedId, list } = route.params;
    const [isChecked, setIsChecked] = useState(false);

    // RENDERING
    return (
        <View style={styles.screen}>
            { list === 'tList' ? (
                <View>
                    <Text>Selected Task: { selectedId }</Text>
                    <FlatList
                        data= { context.tasks.filter(item => item.id === selectedId) }
                        renderItem = {({ item }) => (
                            <View style={styles.listItem}>
                                <Text>{ item.value + '\n' }{ item.date + '\n' }{ 'Priority: ' + item.priority }</Text>
                                <BouncyCheckbox
                                    isChecked={true}
                                    onPress={() => setIsChecked(!isChecked)}
                                    text="Urgent"
                                />
                            </View>
                        )}
                        keyExtractor={ (item) => item.id }
                    />
                    <Button
                        title='Complete Task'
                        onPress={() => navigation.navigate({
                            name: 'CompleteTask',
                            params: {
                                selectedId: selectedId,
                                list: list
                            }
                        })}
                    />
                    <Button
                        title='Edit Task'
                        onPress={() => navigation.navigate({
                            name: 'EditTask',
                            params: { selectedId: selectedId }
                        })}
                    />
                    <Button
                        title='Delete Task'
                        onPress={() => navigation.navigate({
                            name: 'DeleteTask',
                            params: { selectedId: selectedId }
                            }
                        )}
                    />
                    <Button
                        title='Back to Tasklist'
                        onPress={() => navigation.goBack()}
                    />
                </View>
            ) : (
                <View>
                    <Text>Selected Task: { selectedId }</Text>
                    <FlatList
                        data= { context.cTasks.filter(item => item.id === selectedId) }
                        renderItem = {({ item }) => (
                            <View style={styles.listItem}>
                                <Text>{ item.value + '\n' }{ item.date }</Text>
                            </View>
                        )}
                        keyExtractor={ (item) => item.id }
                    />
                    <Button
                        title='Restore task'
                        onPress={() => {
                            context.handleRestoreTask(selectedId);
                            navigation.goBack();

                        }}
                    />
                    <Button
                        title='Delete task'
                        onPress={() => {
                            context.handleRemoveCTask(selectedId);
                            navigation.goBack();
                        }}
                    />
                    <Button
                        title='Back to completed tasks'
                        onPress={ () => navigation.goBack() }
                    />
                </View>
            )}
        </View>
    );
};

export default SelectedTask;