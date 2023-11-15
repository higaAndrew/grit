import {
    React,
    useState,
    useEffect,
} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import styles from './styles/stylesheet'

const PreviousTasks = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
            <Text>Previous Tasks</Text>
            <Button
                title='Back to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default PreviousTasks;