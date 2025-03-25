import * as React from 'react';
import { Text, View} from 'react-native';
 import {NavigationContainer} from 'react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommuntyicons} from '@expo/vector-icons';

import Home from './Home.js';
import Alerta from './Alerta.js/index.js';
import Usuario from './Usuarios.js/index.js';
import fuction from './App';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#b94646'
            }}
            >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommuntyicons name="home" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Alerta"
            component={Alerta}
            options={{
                tabBarLabel:'Alerta',
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommuntyicons name="bell" color={color} size={size} />
                ),
            }}
            />
            <Tab.Screen
            name="Usuarios"
            component={Usuario}
            options={{
                tabBarLabel:'Usuario',
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommuntyicons name="account" color={color} size={size} />
                ),
            }}
            />
            </Tab.Navigator>
    );
}