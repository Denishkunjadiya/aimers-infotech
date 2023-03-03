import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'



const Profile = () => {


    const [User, setUser] = useState([]);

    const getUser = async () => {
        let result = await fetch('http://localhost:5000/user');
        result = await result.json();
        setUser(result);
    }

    useEffect(() => { getUser(); }, [])


    // --delete

    const removeUser = async (id) => {
        let result = await fetch(`http://localhost:5000/user/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getUser();
            alert("record deleted");
        }
    }


    return (
        <>
            <div className="admin_page_top">
                <h1>User</h1>
                <Link to='/register'><button><i class="fa-solid fa-plus"></i> Add user</button></Link>
            </div>
            <div className="profile">
                <table className='admin_table'>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>action</th>
                    </tr>
                    {User.map((item, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td >{item.name}</td>
                            <td className='email'>{item.email}</td>
                            <td className='email'>{item.password}</td>
                            <td>
                                <div className="action">
                                    {/* <i class="fa-regular fa-eye"></i> */}
                                    <Link to={`/updateRegister/${item._id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                                    <i onClick={() => { removeUser(item._id) }} class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        </>
    )
}

export default Profile
