import {
    React,
    useState,
} from 'react';
import moment from 'moment';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const App = () => {
    // VARIABLE DEFINITIONS
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // FUNCTION DEFINITIONS
    const addTask = () => {
        if (task.trim().length > 0) {
            setTasks([...tasks, {
                id: Date.now().toString(),
                value: task,
                date: moment().format('MM/DD/YYYY'),
            }]);
            setTask('');
        }
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    };

    // CREATE CONTEXT
    const contextValue = {
        task, setTask,
        tasks, setTasks,
        addTask,
        removeTask,
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
            </NavigationContainer>
        </AppContext.Provider>
    );
};

export default App;
