import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Employess = () => {
    // --display
    const [employes, setEmployes] = useState([]);

    const getEmployes = async () => {
        let result = await fetch('http://localhost:5000/employe');
        result = await result.json();
        setEmployes(result);
    }

    useEffect(() => { getEmployes(); }, [])

    // --delete

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/employe/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getEmployes();
            alert("record deleted");
        }
    }

    return (
        <>
            <div className="admin_page_top">
                <h1>Employess</h1>
                <Link to='/addEmployess'><button><i class="fa-solid fa-plus"></i> Add Employess</button></Link>
            </div>
            <table className='admin_table'>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>ability</th>
                        <th>image</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {employes.map((item, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.ability}</td>
                            <td><img key={item._id} className='image' src={item.image} alt="Uploaded" /></td>
                            {/* <td><img src={require(`${item.image}`)} alt="" /></td> */}
                            <td>
                                <div className="action">
                                    {/* <i class="fa-regular fa-eye"></i> */}
                                    <Link to={"/updateEmployes/" + item._id}><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <i onClick={() => deleteProduct(item._id)} class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
    )
}

export default Employess
