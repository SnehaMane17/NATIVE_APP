import apiClient from './appClient';

export const loginUserAPI = async (username, password) => {
    const response = await apiClient.post('/login', { username, password });
    return response.data;
};

export const getUserRoleAPI = async () => {
    const response = await apiClient.get('/user-role');
    return response.data.role;
};
