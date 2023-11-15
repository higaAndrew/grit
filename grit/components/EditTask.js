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

const EditTask = ({ navigation, route }) => {
    const { prevScreen } = route.params;
    
    const Previous = () => {
        if (prevScreen === 'SelectedTask') {
            return <Button
                        title='Save Changes and go back to seelectee task'
                        onPress={() => navigation.goBack()}
                    />
        }
        return <Button
                    title='Save Changes and go back to tasklist'
                    onPress={() => navigation.navigate('Tasklist')}
                />
    };

    return (
        <View style={styles.default}>
            <Text>Edit Task</Text>
            <Button
                title='Task Settings'
                onPress={() => navigation.navigate('TaskSettings')}
            />
            <Previous/>
            <Button
                title='Go Back'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default EditTask;