import { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { message } from 'antd';

const useLogin = () =>{
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const loginUser = async (values) => {
        try {
            setError(null);
            setLoading(true);

            const res = await fetch('http://localhost:8080/api/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });

            const data = await res.json();
            if (res.ok) {
                if (data.status === 'success') {
                    message.success(data.message);
                    login(data.token, data.user);
                } else {
                    setError(data.message);
                    console.log(data.message);
                }
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            message.destroy();
        };
    }, []);

    return { loading, error, loginUser };
};

export default useLogin;
