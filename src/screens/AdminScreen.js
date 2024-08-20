// src/screens/AdminScreen.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import AdminUpload from '../components/AdminUpload';
import PDFList from '../components/PDFList';

const AdminScreen = () => {
    const { canUploadPDFsForCurrentUser } = useContext(AuthContext);

    return (
        <View>
            <Text>Admin Screen</Text>
            {canUploadPDFsForCurrentUser() && <AdminUpload />}
            <PDFList />
        </View>
    );
};

export default AdminScreen;
