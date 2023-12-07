import {
    React,
} from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

import styles from './styles/stylesheet'

const About = ({ navigation }) => {
    
    // RENDERING
    return (
        <View style={styles.screen}>
            <Text>About</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default About;