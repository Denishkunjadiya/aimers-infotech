import React, { useEffect, useState } from 'react'
import './Vacancy.css'
import { Link } from 'react-router-dom'


const Vacancy = () => {

    const [vacancy, setVacancy] = useState([]);

    const getVacancy = async () => {
        let result = await fetch('https://aimers-backend.onrender.com/vacancy');
        result = await result.json();
        setVacancy(result);
    }

    useEffect(() => {
        getVacancy();
    }, [])


    return (
        <>
            <div className="vacancy_c">
                <div className="vacancy_img"></div>
                <h1 className="vacancy_title">
                    We Require For...
                </h1>
                <hr />
                <div className="vacancy">
                    <div className="vacancy_left">
                        <img src={require('../img/pexels-pixabay-38568.jpg')} alt="" />
                    </div>
                    <div className="vacancy_right">
                        <h1>Android</h1>
                        <hr />
                        <p>  We require skilled android developer who have knowledge of android studio and API working environment.</p>
                        <div className="require-container">
                            {vacancy.map((item) =>
                                <div className="require">
                                    <div className="v_emp">
                                        <i class="fa-solid fa-user"></i> <h3>{item.requirement}</h3>
                                    </div>
                                    <div className="v_lang">
                                        <i class="fa-solid fa-globe"></i> <h3>{item.lang}</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="v_text">
                            to apply our company for job contact with us
                        </div>
                        <Link to='/contact'>
                            <button>Click For Apply</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Vacancy
