import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
    const { setIsAuthenticated, setUser, setIsError } = useContext(AuthContext);

    const fetchUser = async () => {
        const response = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/auth/user", { withCredentials: true });
        return response.data;
    }

    const { isLoading, error, data } = useQuery(['user'], fetchUser, {
        onSuccess: (data) => {
            if(data.user !== null){
                const userData = data.user[0];
                setUser(userData);
                setIsAuthenticated(true);
            } else {
                setIsError(true);
            }
        },
    });

    return children({ isLoading });
}

export default AuthProvider;