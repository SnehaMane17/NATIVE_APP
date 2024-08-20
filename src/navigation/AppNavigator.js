// src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/AdminScreen';
import UserScreen from '../screens/UserScreen';
import { canAccessAdminFeatures } from '../utils/roleUtils';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const { role, isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return null; // Optionally, you can render a loading screen here
    }

    return (
        <Stack.Navigator>
            {!isAuthenticated ? (
                <Stack.Screen name="Login" component={LoginScreen} />
            ) : canAccessAdminFeatures(role) ? (
                <Stack.Screen name="Admin" component={AdminScreen} />
            ) : (
                <Stack.Screen name="User" component={UserScreen} />
            )}
        </Stack.Navigator>
    );
};

export default AppNavigator;
