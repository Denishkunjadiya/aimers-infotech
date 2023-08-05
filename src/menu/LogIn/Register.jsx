import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'



const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [error, setError] = useState(false)

    const registerdata = async (e) => {

        e.preventDefault();

        if (!name || !email || !password) {
            setError(true);
            return false;
        }

        let result = await fetch('https://aimers-backend.onrender.com/register', {
            method: 'post',
            body: JSON.stringify({ name, password, email }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json()
    }

    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Registration </h1>
                <Link to='/profile'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>

            <div className="login_form">
                <form >
                    <h2>Register User</h2>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Emter Name' />
                    {error && !name && <><br /><span className='error'>**please Enter valid name</span></>}
                    <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Emter Email' />
                    {error && !email && <><br /><span className='error'>**please Enter valid email</span></>}
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Emter Password' />
                    {error && !password && <><br /><span className='error'>**please Enter valid password</span></>}
                    <br />
                    <button onClick={registerdata}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register
