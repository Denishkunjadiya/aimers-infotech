import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const AddClient = () => {

    const [name, setName] = useState("");
    const [file, setFile] = useState("");

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const addClient = (e) => {

        e.preventDefault();

        if (!name || !file) {
            setError(true);
            return false;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', name);

        fetch("https://aimers-backend.onrender.com/addClient", {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
        navigate('/client')
    }


    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Add Client</h1>
                <Link to='/client'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>
            <form className='add_name' onSubmit={addClient}>

                <div className="row">
                    <div className="col">
                        <h4>Enter name</h4>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Client Name' />
                        <br />
                        {error && !name && < span className='error'>**please Enter valid name</span>}
                    </div>
                    <div className="col">
                        <h4>uplode client photo</h4>
                        <input type="file" placeholder='' onChange={(e) => setFile(e.target.files[0])} />
                        <br />
                        {error && !file && < span className='error'>**please select file</span>}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    </div>
                </div>

                <div className="row">
                    <button>Add</button>
                    <button >Clear </button>
                </div>
            </form>

        </>
    )
}

export default AddClient
