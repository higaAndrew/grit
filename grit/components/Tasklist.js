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
import { TouchableHighlight } from 'react-native-gesture-handler';

const Tasklist = ({ navigation }) => {
    const context = useContext(AppContext);

    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Tasklist</Text>
            <Button
                title='Add Task'
                onPress={() => navigation.navigate('AddTask')}
            />
            <Button
                title='Select This Task'
                onPress={() => navigation.navigate('SelectedTask')}
            />
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
            <FlatList
                data={ context.tasks }
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => navigation.navigate('SelectedTask'
                        )}
                        underlayColor='lightgray'
                    >
                        <View style={ styles.listItem }>
                            <Text>{item.value + '\n' }{ item.date }</Text>
                        </View>
                    </TouchableHighlight>
                )}
                
            />
            {/* <FlatList
                data={ context.tasks }
                renderItem={({ item }) => (
                    <View style={ styles.listItem }>
                        <Text>{ item.value + '\n' }{ item.date }</Text>
                        <Button
                            title="Select"
                            onPress={() => navigation.navigate('SelectedTask')}
                        />
                    </View>
                    
                )}
                keyExtractor={ (item) => item.id }
            /> */}
        </View>
    );
};

export default Tasklist;