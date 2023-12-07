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

// IMPORT TOUCH ABILITY
import { TouchableHighlight } from 'react-native-gesture-handler';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const PreviousTasks = ({ navigation }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);

    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Previous Tasks</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.popToTop()}
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
                            <Text>{item.value + '\n' }{ item.date + '\n' }{ 'Priority: ' + item.priority }</Text>
                        </View>
                    </TouchableHighlight>
                )}
                
            />
        </View>
    );
};

export default PreviousTasks;