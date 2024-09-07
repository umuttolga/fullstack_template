

const API_URL = import.meta.env.VITE_API_URL; // Base URL from env

// Helper function to get the token
const getToken = () => localStorage.getItem('token');

// Helper function to handle fetch calls
const apiFetch = async (url: string, options: RequestInit = {}) => {
    const token = getToken();
    
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}) // Add Authorization if token exists
    };

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers: {
            ...headers,
            ...options.headers, // Allow overriding headers if necessary
        }
    });

    // Handle errors globally
    if (!response.ok) {
        const error = await response.text();
        console.error(`Error: ${response.statusText} - ${error}`);
        throw new Error(`API Error: ${response.status}`);
    }

    return response.json(); // handle different response formats here if needed
};

// API Methods

export const getUsers = async () => {
    return apiFetch('/users');
};

export const addUser = async (name: string, email: string) => {
    return apiFetch('/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password: 'defaultpassword' })
    });
};

export const getUserDetails = async (userId: number) => {
    return apiFetch(`/user/${userId}`);
};

export const changeUserCreds = async (userId: number, name: string, email: string) => {
    return apiFetch(`/user/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({ name, email, password: 'defaultpassword' })
    });
};

export const deleteUser = async (userId: number) => {
    return apiFetch(`/user/${userId}`, {
        method: 'DELETE'
    });
};

export const login = async (email: string, password: string) => {
    return apiFetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
};
