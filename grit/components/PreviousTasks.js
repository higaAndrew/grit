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
import { TouchableHighlight } from 'react-native-gesture-handler';

const PreviousTasks = ({ navigation }) => {
    const context = useContext(AppContext);

    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Previous Tasks</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.popToTop()}
            />
            <Button
                title='Delete all Tasks for testing purposes'
                onPress={() => {
                    context.deleteAllTasks()
                }}
            />
            <FlatList
                data={ context.cTasks }
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => navigation.navigate({
                            name: 'SelectedTask',
                            params: {selectedId: item.id},
                            })
                        }

                        underlayColor='lightgray'
                    >
                        <View style={ styles.listItem }>
                            <Text>{item.value + '\n' }{ item.date }</Text>
                        </View>
                    </TouchableHighlight>
                )}
                
            />
        </View>
    );
};

export default PreviousTasks;