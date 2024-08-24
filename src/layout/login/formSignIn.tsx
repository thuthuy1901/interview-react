import Button from "@component/button";
import { useState } from "react";
import { useAuth } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";

const FormSignIn = () => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        const respond = await login(username);
        setLoading(false);
        setError(!respond);
        if(respond) navigate('/profile');
    }

    return (
        <div>
            <h1 className="font-normal text-black text-[64px] leading-[102px] relative w-fit">
                Sign In
                {error && <div className="absolute -right-20 top-7 bg-pink-600 text-white text-xs">Sign In fail</div>}
            </h1>
            <div className="flex flex-col">
                <label className="font-normal text-base mb-3">Username</label>
                <input 
                    type="text" 
                    className="outline-none border border-black w-[407px] max-w-[100vw] h-[57px] rounded-md mb-[46px] px-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Button 
                    title={loading ? '...Loading' : 'Sign In'}
                    padding="w-full py-4 font-normal truncate" 
                    onClick={handleLogin}
                />
            </div>
        </div>
    )
}

export default FormSignIn;