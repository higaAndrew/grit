import {
    React,
    useState,
    useEffect,
} from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import notifee, {
    AuthorizationStatus,
    AndroidImportance,
    EventType,
} from '@notifee/react-native';

const CHANNEL_ID = 'custom';

const HomeScreen = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true);
    const [permitted, setPermitted] = useState(false);


    async function bootstrap() {
        const initialNotification = await notifee.getInitialNotification();

        if (initialNotification) {
            console.log(
                'Notification caused application to open',
                initialNotification.notification,
            );
            console.log(
                'Press action used to open the app',
                initialNotification.pressAction,
            );
        }
    }
    useEffect(() => {
        if (route.params?.post) {

        }
    }, [route.params?.post]);

    useEffect(() => {
        bootstrap().then(() => setLoading(false));
    }, []);

    useEffect(() => {
        return notifee.onForegroundEvent(({type, detail}) => {
            switch (type) {
                case EventType.DISMISSED:
                    console.log('User dismissed notification', detail.notification);
                    break;
                case EventType.PRESS:
                    console.log('User pressed notification', detail.notification);
                    break;
            }
        });
    }, []);

    notifee.onBackgroundEvent(async ({type, detail}) => {
        const {notification, pressAction} = detail;

        if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
            console.log('User marked as read');
            await fetch('https://my-api.com/chat/$(notification.data.chatId}/read', {
                method: 'POST',
            });

            await notifee.cancelNotification(notification.id);
        }
    });

    if (loading) {
        return null;
    }

    function onDisplayNotification() {
        notifee.requestPermission().then(permissionResult => {
            if (permissionResult.authorizationStatus === AuthorizationStatus.DENIED) {
                console.log('User denied permissions request');
            } else if (
            permissionResult.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
                setPermitted(true);
                console.log('User granted permissions request');
            } else if (
            permissionResult.authorizationStatus === AuthorizationStatus.PROVISIONAL) {
                setPermitted(true);
                console.log('User provisionally granted permissions request');
            }
        });

        if (!permitted) {
            console.log('Permissions not granted');
            return;
        }

        notifee.createChannel({
            id: CHANNEL_ID,
            name: 'Banana Channel',
            importance: AndroidImportance.HIGH,
        });

        notifee.displayNotification({
            title: 'a Title',
            body: 'body of the notification',
            android: {
                channelId: CHANNEL_ID,
                importance: AndroidImportance.HIGH,

                pressAction: {
                    id: 'default',
                },
            },
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                })}
            />
            <Button
                title="Create post"
                onPress={() => navigation.navigate('Post')}
            />
            <Text style={{margin:10}}>Post: {route.params?.post}</Text>
            <SafeAreaProvider>
                <SafeAreaView>
                    <Text>Hello World</Text>
                    <Button
                        title="Press console log me"
                        onPress={() => console.error('goo')}
                    />
                    <Button
                        title="Do It!"
                        onPress={() => onDisplayNotification()}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
};

export default HomeScreen;