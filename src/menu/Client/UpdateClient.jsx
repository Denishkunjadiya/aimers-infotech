import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

const UpdateClient = () => {

    const [name, setName] = useState("");
    const [image, setImg] = useState("");

    const [error, setError] = useState(false)

    const parms = useParams();
    const navigate = useNavigate();

    const updateClient = async (e) => {

        e.preventDefault();

        if (!name) {
            setError(true);
            return false;
        }


        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);

        fetch(`https://aimers-backend.onrender.com/client/${parms.id}`, {
            method: "Put",
            body: formData
        })
            .then(response => response.json())
        navigate('/client')


    }

    useEffect(() => {
        getClientDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getClientDetails = async () => {
        let result = await fetch(`https://aimers-backend.onrender.com/client/${parms.id}`);
        result = await result.json();
        setName(result.name);

    }

    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Update Client</h1>
                <Link to='/client'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>
            <form className='add_name'>

                <div className="row">
                    <div className="col">
                        <h4>Enter name</h4>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Client Name' />
                        <br />
                        {error && !name && < span className='error'>**please Enter valid name</span>}

                    </div>
                    <div className="col">
                        <h4>uplode client photo</h4>
                        <input type="file" placeholder='' onChange={(e) => setImg(e.target.files[0])} />
                    </div>
                </div>


                <div className="row">
                    <button onClick={updateClient}>Update</button>
                    <button>Clear</button>
                </div>
            </form>

        </>
    )
}

export default UpdateClient
