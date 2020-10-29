import React, { useState } from 'react';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

import './Login.scss';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value })
        console.log(formData)
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('/api/login', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    
    return (
        <div className="sign-in">
            <h1>Login</h1>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-email-input"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange} 
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange} 
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default Login;