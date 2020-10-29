import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

import './sign-up.styles.scss';

const SignUp = () => {

    const { formData, setFormData } = useState({
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        pasword: '',
        confirmPassword: ''
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log('yes')
    }

    return (
        <div className="sign-up">
            <h1>SignUp</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    id="outlined-first-name-input"
                    label="First Name"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    id="outlined-last-Name-input"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    id="outlined-username-input"
                    label="Username"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                />
                <TextField
                    id="outlined-confirm=password-input"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default SignUp;