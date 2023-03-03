import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const onLogIn = async () => {

        let result = await fetch('http://localhost:5000/logIn', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json()
        if (result.email) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/')
        } else {
            alert(" Sorry, something wrong")
        }
    }

    useEffect(() => {
        const auth = localStorage.getItem('user')

        if (auth) {
            navigate('/');
        }
    })

    return (
        <>

            <div className="login_form">
                <form >
                    <h2>Log In</h2>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Emter Name' /><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Emter Password' /><br />
                    <button onClick={onLogIn}>Log In</button>
                </form>
            </div>

        </>
    )
}

export default LogIn
