import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Client = () => {
    const [Client, setClient] = useState([]);


    const getClient = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/client")
        result = await result.json();
        setClient(result);
    }

    useEffect(() => { getClient(); }, [])

    // --delete

    const deleteClient = async (id) => {
        let result = await fetch(`https://aimers-backend.onrender.com/client/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getClient();
            alert("record deleted");
        }
    }


    return (
        <>
            <div className="admin_page_top">
                <h1>Client</h1>
                <Link to='/addClient'><button><i class="fa-solid fa-plus"></i> Add Client</button></Link>
            </div>

            <table className='admin_table'>
                <tr>
                    <th>no</th>

                    <th>name</th>
                    <th>image</th>

                    <th>action</th>
                </tr>
                {Client.map((item, index) =>

                    <tr>
                        <td>{index + 1}</td>

                        <td>{item.name}</td>
                        <td ><img key={item._id} className='image' src={item.image} alt="Uploaded" /></td>

                        <td>
                            <div className="action">
                                {/* <i class="fa-regular fa-eye"></i> */}
                                <Link to={"/updateClient/" + item._id}><i class="fa-solid fa-pen-to-square"></i></Link>
                                <i onClick={() => deleteClient(item._id)} class="fa-solid fa-trash"></i>
                            </div>
                        </td>
                    </tr>
                )}
            </table>

        </>
    )
}

export default Client
