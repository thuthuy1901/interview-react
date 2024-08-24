import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useNavigateHome = (path: string) => {
    const navigate = useNavigate();
    navigate(path);
}

export const setupAxiosInterceptors = (
    accessToken: string | null,
    refreshToken: string | null,
    logout: () => void,
    refreshAccessToken: () => Promise<void>,
) => {
    axios.interceptors.request.use(
        config => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;
            
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    await refreshAccessToken();
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return axios(originalRequest);
                } catch (refreshError) {
                    console.error('Token refresh failed:', refreshError);
                    logout();
                    useNavigateHome('/login'); 
                    return Promise.reject(refreshError);
                }
            }
            
            return Promise.reject(error);
        }
    );
};
