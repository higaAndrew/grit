import {
    React,
} from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

import styles from './styles/stylesheet'

const SaveChanges = ({ navigation }) => {
    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Save Changes</Text>
            <Button
                title='Save Changes?'
                onPress={() => navigation.navigate('Tasklist')}
            />
            <Button
                title='Back to Task Settings'
                onPress={() => navigation.navigate('TaskSettings')}
            />
        </View>
    );
};

export default SaveChanges;