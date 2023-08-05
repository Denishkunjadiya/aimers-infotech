import React, { useEffect, useState } from 'react'

const Contact = () => {


    const [Contact, setContact] = useState([]);


    const getContact = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/contact")
        result = await result.json();
        setContact(result);
    }

    useEffect(() => { getContact(); }, [])


    // --delete

    const deleteContact = async (id) => {
        let result = await fetch(`https://aimers-backend.onrender.com/contact/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getContact();
            alert("record deleted");
        }
    }


    return (
        <>
            <div className="admin_page_top">
                <h1>contact</h1>
            </div>

            <table className='admin_table'>
                <tr>
                    <th>no</th>
                    <th>name</th>
                    <th>e-mail</th>
                    <th>contact no</th>
                    <th>message</th>
                    <th>action</th>
                </tr>
                {Contact.map((item, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td className="email">{item.e_mail}</td>
                        <td>{item.mobile_no}</td>
                        <td>{item.msg}</td>
                        <td >
                            <div className="action">
                                {/* <i class="fa-regular fa-eye"></i> */}
                                {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                <i onClick={() => deleteContact(item._id)} class="fa-solid fa-trash"></i>
                            </div>
                        </td>
                    </tr>
                )}
            </table>

        </>
    )
}

export default Contact
