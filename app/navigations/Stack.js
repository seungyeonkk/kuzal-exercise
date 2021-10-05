import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { theme } from "../style/theme";
import HomePage from "../pages/HomePage";
import TimerSettingPage from "../pages/TimerSettingPage";
import TimerPage from "../pages/TimerPage";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                height: 80,
                backgroundColor: theme.background,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                color: theme.white
            }
        }}>
            <Stack.Screen name="HomePage" component={HomePage}
                options={{
                    headerShown: true,
                    headerBackTitleVisible: false
                }}
            />
            <Stack.Screen name="TimerSettingPage" component={TimerSettingPage}
                options={{
                    headerShown: true,
                    headerBackTitleVisible: false
                }}
            />
            <Stack.Screen name="TimerPage" component={TimerPage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
