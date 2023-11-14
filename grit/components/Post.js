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

const CreatePostScreen = ({navigation, route}) => {
    const [postText, setPostText] = useState('');

    return (
        <>
        <TextInput
            multiline
            placeholder="What's on your mind?"
            style={{height:200, padding:10, backgroundColor:'white'}}
            value={postText}
            onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    navigation.navigate({
                        name:'Home',
                        params: {post: postText},
                        merge: true,
                    });
                }}
            />
        </>
    );
};

export default CreatePostScreen;