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

const SaveChanges = ({ navigation, route }) => {
    
    return (
        <View style={styles.default}>
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