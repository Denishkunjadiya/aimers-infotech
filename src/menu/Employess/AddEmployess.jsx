import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddEmployess = () => {

    const [name, setName] = useState();
    const [ability, setability] = useState();
    const [image, setImage] = useState();

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const addEmployess = (e) => {
        e.preventDefault();

        if (!name || !ability || !image) {
            setError(true);
            return false;
        }


        const formData = new FormData();
        formData.append('name', name);
        formData.append('ability', ability);
        formData.append('image', image);

        navigate('/employess')
        fetch('http://localhost:5000/addEmploye', {
            method: 'post',
            body: formData
        })
            .then(response => response.json())
    }

    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Add Employess</h1>
                <Link to='/employess'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>
            <form className='add_name' onSubmit={addEmployess}>

                <div className="row">
                    <div className="col">
                        <h4>Enter name</h4>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                        <br />
                        {error && !name && < span className='error'>**please Enter valid name</span>}
                    </div>
                    <div className="col">
                        <h4>Enter ability</h4>
                        <input type="text" value={ability} onChange={(e) => setability(e.target.value)} placeholder='Enter Your Ability' />
                        <br />
                        {error && !ability && <span className='error'>**please Enter valid fild</span>}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h4>uplode Your photo</h4>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='' />
                        <br />
                        {error && !image && <span className='error'>**please Enter valid img</span>}
                    </div>
                </div>

                <div className="row">
                    <button>Add</button>
                    <button>Clear</button>
                </div>
            </form>
        </>
    )
}

export default AddEmployess
