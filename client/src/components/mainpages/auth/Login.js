import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <div className="header">
                    <h2>Welcome to Awesome Shop</h2>
                    <p className="text-header">Enter your email address and password to <br/>access to continue</p>
                </div>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />
                <button type="submit">Login</button>
                <div className="row">
                    
                    <p >Don't have an account?</p>
                    <Link to="/register">Sign Up</Link>
                </div>
            </form>
            
        </div>
    )
}

export default Login
