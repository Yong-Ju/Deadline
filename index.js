/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Deadlines from './src/screens/Deadlines';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => Deadlines);