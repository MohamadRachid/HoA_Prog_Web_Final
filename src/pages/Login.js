import React, { useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 

function Login() {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); 

    const submit = async (e) => {
        e.preventDefault();

        if (!username || !pass) {
            setError('Please enter both username and password.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/', { username, pass });

            if (res.data.status === 'exist') {
                const token = res.data.token;
                login(username, token); 
                navigate('/card'); 
            } else if (res.data.status === 'notexist') {
                setError('User did not sign up or the password is wrong.');
            } else {
                setError('Unexpected error. Please try again.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred. Please check your details and try again.');
        }
    };

    return (
        <section>
            <div className='cover'>
                <h1 className='Login'>Login</h1>
                {error && <p className="error-message">{error}</p>} {/* Display error messages */}
                <form onSubmit={submit}>
                    <input
                        className='input-field'
                        value={username}
                        type='text'
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className='input-field'
                        value={pass}
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPass(e.target.value)}
                        required
                    />
                    <button className='login-button' type='submit'>
                        Log In
                    </button>
                </form>
                <a className='link1' href='/'>Forgot password?</a>
                <a className='link2' href='/SignUp'>Sign Up instead</a>
            </div>
        </section>
    );
}

export default Login;
