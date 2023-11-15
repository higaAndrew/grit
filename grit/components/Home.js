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

import styles from './styles/stylesheet';

const CHANNEL_ID = 'custom';

const Home = ({ navigation, route }) => {
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
        <View style={styles.default}>
            <Text>Grit</Text>
            <Button
                title='Tasklist'
                onPress={() => navigation.navigate('Tasklist')}
            />
            <Button
                title='Previous Tasks'
                onPress={() => navigation.navigate('PreviousTasks')}
            />
            <Button
                title='Screentime'
                onPress={() => navigation.navigate('Screentime')}
            />
            <Button
                title='Settings'
                onPress={() => navigation.navigate('Settings')}
            />
            <Button
                title='About'
                onPress={() => navigation.navigate('About')}
            />
        </View>
    );
};

export default Home;