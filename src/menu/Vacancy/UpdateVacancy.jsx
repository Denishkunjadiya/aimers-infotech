import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'


const UpdateVacancy = () => {

    const [requirement, setRequirement] = useState("");
    const [lang, setLang] = useState("");

    const [error, setError] = useState(false)

    const parms = useParams();
    const navigate = useNavigate();

    const updateVacancy = async (e) => {
        e.preventDefault();

        if (!requirement || !lang) {
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:5000/vacancy/${parms.id}`, {
            method: "Put",
            body: JSON.stringify({ requirement, lang }),
            headers: {
                'Content-Type': "application/json"
            }
        });


        result = await result.json()
        console.warn(result)
        if (result) {
            navigate('/vacancy');
        }
    }

    const getVacancyDetails = async () => {
        let result = await fetch(`http://localhost:5000/vacancy/${parms.id}`);
        result = await result.json();
        setRequirement(result.requirement);
        setLang(result.lang)

    }

    useEffect(() => {
        getVacancyDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <>
            <div className="admin_page_top add_page">
                <h1>Update Vacancy</h1>
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
                    <button onClick={updateVacancy}>update</button>
                </div>
            </form>

        </>
    )
}

export default UpdateVacancy
