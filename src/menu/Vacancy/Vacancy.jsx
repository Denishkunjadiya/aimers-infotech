import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Vacancy = () => {

    const [vacancy, setVacancy] = useState([]);

    const getVacancy = async () => {
        let result = await fetch('http://localhost:5000/vacancy');
        result = await result.json();
        setVacancy(result);
    }

    useEffect(() => {
        getVacancy();
    }, [])


    const deleteVacancy = async (id) => {
        let result = await fetch(`http://localhost:5000/vacancy/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getVacancy();
            alert("record deleted");
        }
    }

    return (
        <>

            <div className="admin_page_top">
                <h1>Vacancy</h1>
                <Link to='/addVacancy'><button><i class="fa-solid fa-plus"></i> Add Vacancy</button></Link>
            </div>

            <table className='admin_table'>
                <tr>
                    <th>no</th>

                    <th>require</th>
                    <th>language</th>

                    <th>action</th>
                </tr>
                {
                    vacancy.map((item, index) =>

                        < tr >
                            <td>{index + 1}</td>

                            <td>{item.requirement}</td>
                            <td>{item.lang}</td>

                            <td>
                                <div className="action">
                                    {/* <i class="fa-regular fa-eye"></i> */}
                                    <Link to={"/updateVacancy/" + item._id}><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <i onClick={() => deleteVacancy(item._id)} class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                    )
                }
            </table>

        </>
    )
}

export default Vacancy
