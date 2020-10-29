import React, { useState } from 'react';

import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

import './sign-up.styles.scss';

const SignUp = () => {

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value })
        console.log(formData)
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:3001/signup', formData)
        .then(res => console.log(res))
        .catch(err => console.log('err'));
    }
    
    return (
        <div className="sign-up">
            <h1>SignUp</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-email-input"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange} 
                />
                <TextField
                    id="outlined-first-name-input"
                    label="First Name"
                    name="firstName"
                    type="text"
                    variant="outlined"
                    onChange={handleChange} 
                />
                <TextField
                    id="outlined-last-Name-input"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    variant="outlined"
                    onChange={handleChange} 
                />
                <TextField
                    id="outlined-username-input"
                    label="Username"
                    name="username"
                    type="text"
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
                <TextField
                    id="outlined-confirm=password-input"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    variant="outlined"
                    onChange={handleChange} 
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default SignUp;