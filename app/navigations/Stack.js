import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import { theme } from "../style/theme";
import Home from "../pages/Home";


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
                    headerShown: true
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
