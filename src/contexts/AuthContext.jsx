import { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AuthContext = createContext()

const checkAuth = async () => {
    const res = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/auth/getUser");
    return res.data;
}

const authQuery = useQuery({
    queryKey: ['user_id'],
    queryFn: checkAuth,
    cacheTime: 5000
});

const AuthContextProvider = ({ children }) => {
    <AuthContext.Provider value={authQuery}>
        {children}
    </AuthContext.Provider>
}