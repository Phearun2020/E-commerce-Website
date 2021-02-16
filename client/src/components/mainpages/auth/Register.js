import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <div className="header">
                    <h2>Welcome to Awesome Shop</h2>
                    <p className="text-header">Don't have an account?Create your own<br/>account, it takes less than a minute</p>
                </div>
                
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />
                <input type="password" name="password" required autoComplete="on"
                placeholder="Confirm Password" value={user.password} onChange={onChangeInput} />
                <div class="container">
                    {/* <input className="check" type="checkbox"/> */}
                    I accept Terms and Continues
                </div>

                <button type="submit">Sing Up</button>
                <div className="row">
                    
                    <p >Don't have an account?</p>
                    <Link to="/login">Sign In</Link>
                </div>
            </form>
        </div>
    )
}

export default Register