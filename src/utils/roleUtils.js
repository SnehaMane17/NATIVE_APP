// src/utils/roleUtils.js

/**
 * Check if the user has the admin role.
 * @param {string} role - The role of the user.
 * @returns {boolean} - True if the user is an admin, otherwise false.
 */
export const isAdmin = (role) => {
    return role === 'admin';
};

/**
 * Check if the user has the user role.
 * @param {string} role - The role of the user.
 * @returns {boolean} - True if the user is a regular user, otherwise false.
 */
export const isUser = (role) => {
    return role === 'user';
};

/**
 * Determine if the user can access admin features.
 * @param {string} role - The role of the user.
 * @returns {boolean} - True if the user can access admin features, otherwise false.
 */
export const canAccessAdminFeatures = (role) => {
    return isAdmin(role);
};

/**
 * Determine if the user can view PDFs.
 * @param {string} role - The role of the user.
 * @returns {boolean} - True if the user can view PDFs, otherwise false.
 */
export const canViewPDFs = (role) => {
    return isUser(role) || isAdmin(role);
};

/**
 * Determine if the user can upload PDFs.
 * @param {string} role - The role of the user.
 * @returns {boolean} - True if the user can upload PDFs, otherwise false.
 */
export const canUploadPDFs = (role) => {
    return isAdmin(role);
};
