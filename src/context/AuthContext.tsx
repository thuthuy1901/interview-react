import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { setupAxiosInterceptors } from '../service/axiosConfig';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string) => Promise<boolean>;
    logout: () => void;
    refreshAccessToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const storedTokens = JSON.parse(localStorage.getItem('interview-react-token') || '{}');
    const [accessToken, setAccessToken] = useState<string | null>(storedTokens.accessToken || null);
    const [refreshToken, setRefreshToken] = useState<string | null>(storedTokens.refreshToken || null);
    const isAuthenticated = Boolean(accessToken);

    useEffect(() => {
        const tokens = { accessToken, refreshToken };
        localStorage.setItem('interview-react-token', JSON.stringify(tokens));
    }, [accessToken, refreshToken]);

    const login = async (username: string) => {
        try {
            const response = await axios.post('https://api-test-web.agiletech.vn/auth/login', { username });
            const { accessToken, refreshToken } = response.data;
            if (!accessToken || !refreshToken) {
                return false;
            }
            const tokens = { accessToken, refreshToken };
            localStorage.setItem('interview-react-token', JSON.stringify(tokens));
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            return true;
        } catch (error) {
            return false;
        }
    };

    const logout = async () => {
        try {
            await axios.delete('https://api-test-web.agiletech.vn/auth/logout', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setAccessToken(null);
            setRefreshToken(null);
            localStorage.removeItem('interview-react-token');
        }
    };

    const refreshAccessToken = async () => {
        if (!refreshToken) return;

        try {
            const response = await axios.post('https://api-test-web.agiletech.vn/auth/refresh-token', {
                refreshToken: refreshToken
            });
            setAccessToken(response.data.accessToken);
        } catch (error) {
            console.error('Token refresh failed:', error);
            logout();
        }
    };

    setupAxiosInterceptors(accessToken, refreshToken, logout, refreshAccessToken);

    return (
        <AuthContext.Provider value={{  isAuthenticated, login, logout, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
