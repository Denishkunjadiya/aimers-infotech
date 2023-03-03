import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'


const UpdateProfile = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false)

    const parms = useParams();
    const navigate = useNavigate();

    const updateRegisterdata = async (e) => {
        e.preventDefault();

        if (!name || !password) {
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:5000/user/${parms.id}`, {
            method: "Put",
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-Type': "application/json"
            }
        });


        result = await result.json()
        navigate('/profile');
        if (result) {
        }
    }

    useEffect(() => {
        getUserDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getUserDetails = async () => {
        let result = await fetch(`http://localhost:5000/user/${parms.id}`);
        result = await result.json();
        setName(result.name);
        setPassword(result.password);

    }

    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Update User </h1>
                <Link to='/profile'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>

            <div className="login_form">
                <form >
                    <h2>update User</h2>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Emter Name' /><br />
                    {error && !name && < span className='error'>**please Enter valid name</span>}
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Emter Password' /><br />
                    {error && !password && < span className='error'>**please Enter valid password</span>}
                    <br />
                    <button onClick={updateRegisterdata}>Update Data</button>
                </form>
            </div>
        </>
    )
}

export default UpdateProfile
