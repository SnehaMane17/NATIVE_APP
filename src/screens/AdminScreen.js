// src/screens/AdminScreen.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const AdminScreen = () => {
    const { canUploadPDFsForCurrentUser } = useContext(AuthContext);

    return (
        <View>
            <Text>Admin Screen</Text>
            {canUploadPDFsForCurrentUser() && <Text>Admin upload</Text>}

        </View>
    );
};

export default AdminScreen;
