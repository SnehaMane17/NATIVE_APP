// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { loginUserAPI, getUserRoleAPI } from '../services/authService';
import { canUploadPDFs, canViewPDFs } from '../utils/roleUtils'; // Import utility functions

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const userRole = await getUserRoleAPI();
                if (userRole) {
                    setRole(userRole);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("Failed to fetch user role", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserRole();
    }, []);

    const login = async (username, password) => {
        try {
            const response = await loginUserAPI(username, password);
            if (response.success) {
                setRole(response.role);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const logout = () => {
        setRole(null);
        setIsAuthenticated(false);
    };

    // Wrap utility functions to use context values
    const canUploadPDFsForCurrentUser = () => canUploadPDFs(role);
    const canViewPDFsForCurrentUser = () => canViewPDFs(role);

    return (
        <AuthContext.Provider value={{ role, isAuthenticated, loading, login, logout, canUploadPDFsForCurrentUser, canViewPDFsForCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
