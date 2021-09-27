import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { theme } from "../style/theme";
import Home from "../pages/Home";
import TimerSetting from "../pages/TimerSetting";

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
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: true,
                    headerBackTitleVisible: false
                }}
            />
            <Stack.Screen name="TimerSetting" component={TimerSetting}
                  options={{
                      headerShown: true,
                      headerBackTitleVisible: false
                  }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
