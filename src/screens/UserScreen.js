// src/screens/UserScreen.js
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import PDFList from '../components/PDFList';

const UserScreen = () => {
    const { canViewPDFsForCurrentUser } = useContext(AuthContext);

    return (
        <View>
            <Text>User Screen</Text>
            {canViewPDFsForCurrentUser() && <PDFList />}
        </View>
    );
};

export default UserScreen;
