// src/screens/UserScreen.js
import React, { useContext } from 'react';
import { View, Text } from 'react-native';

const UserScreen = () => {
    const { canViewPDFsForCurrentUser } = useContext(AuthContext);

    return (
        <View>
            <Text>User Screen</Text>
            {canViewPDFsForCurrentUser() && <Text>User screen</Text>}
        </View>
    );
};

export default UserScreen;
