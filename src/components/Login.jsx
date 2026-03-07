import axios from "axios";
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/user.slice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${BASE_URL}/login`, {
                emailId: emailId,
                password: password
            }, {
                withCredentials: true
            });
            dispatch(addUser(response.data.data))
            navigate("/feed")
        } catch (error) {
            console.error('Login failed:', error);
            setError(error?.response?.data || 'Login failed');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card card-dash bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title flex justify-center my-2">Login</h2>
                    <fieldset className="fieldset">
                        <label className="fieldset-label my-2">Email ID</label>
                        <input type="text" className="input" value={emailId} placeholder="Enter your email ID" onChange={(e) => setEmailId(e.target.value)} />
                        <label className="fieldset-label my-2">Password</label>
                        <input type="password" className="input" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </fieldset>
                    {error && <p className="text-error">{error}</p>}
                    <div className="card-actions justify-center m-2">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default Login;