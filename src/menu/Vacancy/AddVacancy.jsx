import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const AddVacancy = () => {

    const [requirement, setRequirement] = useState("");
    const [lang, setLang] = useState("");

    const [error, setError] = useState(false)

    const addVacancy = async (e) => {
        e.preventDefault();

        if (!requirement || !lang) {
            setError(true);
            return false;
        }

        let result = await fetch("https://aimers-backend.onrender.com/addVacancy", {
            method: 'post',
            body: JSON.stringify({ requirement, lang }),
            headers: {
                'Content-Type': 'application/json '
            }
        });
        result = await result.json()
    }



    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Add Vacancy</h1>
                <Link to='/vacancy'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
            </div>
            <form className='add_name'>

                <div className="row">
                    <div className="col">
                        <h4>require</h4>
                        <input type="text" value={requirement} onChange={(e) => setRequirement(e.target.value)} placeholder='requirement' />
                        <br />
                        {error && !requirement && < span className='error'>**please Enter valid input</span>}
                    </div>
                    <div className="col">
                        <h4>in which language</h4>
                        <input type="text" placeholder='language' value={lang} onChange={(e) => setLang(e.target.value)} />
                        <br />
                        {error && !lang && < span className='error'>**please Enter valid name</span>}
                    </div>
                </div>


                <div className="row">
                    <button onClick={addVacancy}>Add</button>
                    <button >Clear</button>
                </div>
            </form>

        </>
    )
}

export default AddVacancy
