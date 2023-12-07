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

// IMPORT TOUCH ABILITY
import { TouchableHighlight } from 'react-native-gesture-handler';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import AppContext from './AppContext';
import styles from './styles/stylesheet'

const Tasklist = ({ navigation }) => {
    // VARIABLE DEFINITIONS
    const context = useContext(AppContext);
    const [isChecked, setIsChecked] = useState(false);

    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Tasklist</Text>
            <Button
                title='Add Task'
                onPress={() => navigation.navigate('AddTask')}
            />
            <Button
                title='Back to Home'
                onPress={() => navigation.popToTop()}
            />
            <FlatList
                data={ context.tasks }
                renderItem={({ item }) => (
                    <View style={ styles.listItem }>
                        <TouchableHighlight
                            onPress={() => navigation.navigate({
                                name: 'SelectedTask',
                                params: {
                                    selectedId: item.id,
                                    list: 'tList',
                                },
                            })}
                            underlayColor='lightgray'
                        >
                            <Text>{item.value + '\n' }{ item.date + '\n' }{ 'Priority: ' + item.priority }</Text>
                        </TouchableHighlight>
                        <BouncyCheckbox
                            text='Urgent'
                            isChecked={ isChecked }
                            onPress={() => setIsChecked(!isChecked)}
                        />
                    </View>
                )}    
            />
        </View>
    );
};

export default Tasklist;