import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'


const UpdateEmploye = () => {

    const [name, setName] = useState();
    const [ability, setability] = useState();
    const [image, setImage] = useState();
    const [error, setError] = useState(false)

    const parms = useParams();
    const navigate = useNavigate();

    const updateEmploye = (e) => {
        e.preventDefault();

        if (!name || !ability) {
            setError(true);
            return false;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('ability', ability);
        formData.append('image', image);

        fetch(`https://aimers-backend.onrender.com/employe/${parms.id}`, {
            method: "Put",
            body: formData
        })
            .then(response => response.json())
        navigate('/employess');
    }

    useEffect(() => {
        getEmployeDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getEmployeDetails = async () => {
        let result = await fetch(`https://aimers-backend.onrender.com/employe/${parms.id}`);
        result = await result.json();
        setName(result.name);
        setability(result.ability);

    }


    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Update Employess</h1>
                <Link to='/employess'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>
            <form className='add_name'>

                <div className="row">
                    <div className="col">
                        <h4>Enter name</h4>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                        {error && !name && < span className='error'>**please Enter valid name</span>}
                    </div>
                    <div className="col">
                        <h4>Enter ability</h4>
                        <input type="text" value={ability} onChange={(e) => setability(e.target.value)} placeholder='Enter Your Ability' />
                        {error && !ability && <span className='error'>**please Enter valid fild</span>}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h4>uplode Your photo</h4>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='' />
                    </div>
                </div>

                <div className="row">
                    <button onClick={updateEmploye}>Update</button>
                    <button>Clear</button>
                </div>
            </form>
        </>
    )
}

export default UpdateEmploye
