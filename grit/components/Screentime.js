import {
    React,
} from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

import styles from './styles/stylesheet'

const Screentime = ({ navigation }) => {
    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>Screentime</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Screentime;