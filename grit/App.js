import {
    React,
    useEffect,
    useState,
} from 'react';
import moment from 'moment';

// IMPORT NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// IMPORT ASYNCHRONOUS LOCAL STORAGE
import AsyncStorage from '@react-native-async-storage/async-storage';
// IMPORT DROPDOWN ALERTS
import DropdownAlert, {
    DropdownAlertData,
    DropdownAlertType,
} from 'react-native-dropdownalert';

// IMPORT COMPONENTS
import Home from './components/Home';
import Tasklist from './components/Tasklist';
import AddTask from './components/AddTask';
import SelectedTask from './components/SelectedTask';
import CompleteTask from './components/CompleteTask';
import DeleteTask from './components/DeleteTask';
import EditTask from './components/EditTask';
import TaskSettings from './components/TaskSettings';
import SaveChanges from './components/SaveChanges';
import PreviousTasks from './components/PreviousTasks';
import Screentime from './components/Screentime';
import Settings from './components/Settings';
import About from './components/About';
import AppContext from './components/AppContext';

// CREATE STACK
const Stack = createStackNavigator();

const App = () => {
    // VARIABLE DEFINITIONS
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [cTask, setCTask] = useState('');
    const [cTasks, setCTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    // CREATE ASYNC LOCAL STORAGE
    useEffect(() => {
        // Load stored tasks on app start
        loadTasksFromStorage();
    }, []);

    useEffect(() => {
        // Load stored completed tasks on app start
        loadCTasksFromStorage();
    }, []);

    // LOADING ASYNC STORAGE
    const loadTasksFromStorage = async () => {
        // Load tasks for program
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks !== null) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Failed to load tasks.');
        }
    };

    const loadCTasksFromStorage = async () => {
        // Load completed tasks
        try {
            const storedTasks = await AsyncStorage.getItem('cTasks');
            if (storedTasks !== null) {
                setCTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Failed to load completed tasks.');
        }
    };

    // HANDLER FUNCTIONS
    const handleAddTask = async () => {
        // Add and save task
        const newTasks = ([...tasks, {
            id: Date.now().toString(),
            value: task,
            date: moment().format('MM/DD/YYYY'),
            priority: 'Normal',
            urgent: false,
        }]);
        setTasks(newTasks);
        setTask('');
        showAlert(
            'Info',
            'Task Added',
        );

        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to save task.');
        }
    };

    const handleRemoveTask = async (selectedId, complete) => {
        // Delete and task and save
        const newTasks = (tasks.filter((t) => t.id !== selectedId));
        setTasks(newTasks);
        if (!complete) {
            showAlert(
                'Info',
                'Task Deleted',
            );
        }        

        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to delete task.');    
        }
    };

    const handleCompleteTask = async (selectedId) => {
        // Remove task from tasklist and place in completed tasklist
        const newTask = tasks.find(item => item.id === selectedId);
        const newTasks = ([...cTasks, newTask])
        setCTasks(newTasks);
        setCTask('');
        showAlert(
            'Success',
            'Task Completed',
            'Good job!',
        );

        try {
            await AsyncStorage.setItem('cTasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to complete task.');
        }
        handleRemoveTask(selectedId, true);
    };

    const handleRestoreTask = async (selectedId) => {
        // Remove task from completed tasklist and place in normal tasklist
        const newTask = cTasks.find(item => item.id === selectedId);
        const newTasks = ([...tasks, newTask])
        setTasks(newTasks);
        setTask('');
        showAlert(
            'Info',
            'Task Restored',
        );

        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to complete task.');
        }
        handleRemoveCTask(selectedId, true);
    };

    const handleRemoveCTask = async (selectedId, restore) => {
        // Delete completed task and save
        const newTasks = (cTasks.filter((t) => t.id !== selectedId));
        setCTasks(newTasks);
        if (!restore) {
            showAlert(
                'Info',
                'Task Deleted',
            )
        }

        try {
            await AsyncStorage.setItem('cTasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to delete task.');    
        }
    };

    const handleSaveEdit = async (selectedId, value, priority) => {
        // Save changes to task data
        const data = tasks.findIndex(item => item.id === selectedId);
        const newTasks = ([...tasks]);
        newTasks[data].value = value;
        newTasks[data].priority = priority;
        setTasks(newTasks);
        setTask('');
        showAlert(
            'Success',
            'Changes Saved',
        )

        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Failed to save task.');
        }
    };

    const showAlert = async (type, title, message) => {
        // Give alert/notification
        const alertType = DropdownAlertType[type] || '';
        try {
            const alertData = await alert({
                type: DropdownAlertType[type],
                title: title,
                message: message,
            });
        } catch (error) {
            console.error('Failed to alert.');
        }
    };

    // CREATE CONTEXT
    const contextValue = {
        task, setTask,
        tasks, setTasks,
        cTask, setCTask,
        cTasks, setCTasks,
        modalVisible, setModalVisible,
        handleAddTask, handleRemoveTask,
        handleCompleteTask, handleRestoreTask,
        handleRemoveCTask, handleSaveEdit,
        showAlert,
    };

    // RENDERING
    return (
        <AppContext.Provider value={ contextValue }>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen
                        name='Home'
                        component={ Home }
                    />
                    <Stack.Screen
                        name='Tasklist'
                        component={ Tasklist }
                    />
                    <Stack.Screen
                        name='AddTask'
                        component={ AddTask }
                    />
                    <Stack.Screen
                        name='SelectedTask'
                        component={ SelectedTask }
                    />
                    <Stack.Screen
                        name='CompleteTask'
                        component={ CompleteTask }
                    />
                    <Stack.Screen
                        name='DeleteTask'
                        component={ DeleteTask }
                    />
                    <Stack.Screen
                        name='EditTask'
                        component={ EditTask }
                    />
                    <Stack.Screen
                        name='TaskSettings'
                        component={ TaskSettings }
                    />
                    <Stack.Screen
                        name='SaveChanges'
                        component={ SaveChanges }
                    />
                    <Stack.Screen
                        name='PreviousTasks'
                        component={ PreviousTasks }
                    />
                    <Stack.Screen
                        name='Screentime'
                        component={ Screentime }
                    />
                    <Stack.Screen
                        name='Settings'
                        component={ Settings }
                    />
                    <Stack.Screen
                        name='About'
                        component={ About }
                    />
                </Stack.Navigator>
                <DropdownAlert alert={func => (alert = func)} />
            </NavigationContainer>
        </AppContext.Provider>
    );
};

export default App;
