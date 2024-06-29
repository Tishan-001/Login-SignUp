import { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext.jsx';
import { message } from "antd";

const useSignup = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const registerUser = async (values) => {
        if (values.password !== values.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            setError(null);
            setLoading(true);
            const res = await fetch('http://localhost:8080/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await res.json();
            if (res.status === 201) {
                message.success(data.message);
                login(data.token, data.user);
            } else if (res.status === 400) {
                setError(data.message);
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            message.destroy();
        };
    }, []);

    return { loading, error, registerUser };
};

export default useSignup;
