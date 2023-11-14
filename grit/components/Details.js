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

const DetailsScreen = ({route, navigation}) => {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details AGAIN"
                onPress={() => navigation.push('Details')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go back to first page"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

export default DetailsScreen;