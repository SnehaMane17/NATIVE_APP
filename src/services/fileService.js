import appClient from './appClient'; 

// Upload a file
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
    });

    const response = await appClient.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

// Download a file
export const downloadFile = async (fileUrl) => {
    const response = await appClient.get(fileUrl, { responseType: 'blob' });
    return response.data;
};
