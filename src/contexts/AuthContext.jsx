import { createContext } from 'react';
const AuthContext = createContext(null);


const AuthContextProvider = ({ children }) => {
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}

export { AuthContextProvider, AuthContext };