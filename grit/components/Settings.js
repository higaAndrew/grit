import {
    React,
} from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

import styles from './styles/stylesheet'

const Settings = ({ navigation }) => {
    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Settings</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Settings;