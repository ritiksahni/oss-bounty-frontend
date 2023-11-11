import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
    const { setIsAuthenticated, setUser } = useContext(AuthContext);

    const fetchUser = async () => {
        const response = await axios.get(process.env.EXPRESS_SERVER_URL + "/api/auth/user", { withCredentials: true });
        return response.data;
    }

    const { isLoading, error, data } = useQuery(['user'], fetchUser, {
        onSuccess: (data) => {
            if(data.user !== null){
                const userData = data.user[0];
                userData.user_id = `github|` + userData.user_id;
                setUser(userData);
                setIsAuthenticated(true);
            }
        }
    });

    return children({ isLoading });
}

export default AuthProvider;