import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState([]);

    const getPortfolio = async () => {
        let result = await fetch('https://aimers-backend.onrender.com/portfolio');
        result = await result.json();
        setPortfolio(result);
    }

    useEffect(() => { getPortfolio(); }, [])


    // --delete

    const deleteProject = async (id) => {
        let result = await fetch(`https://aimers-backend.onrender.com/portfolio/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getPortfolio();
            alert("record deleted");
        }
    }




    return (
        <>
            <div className="admin_page_top">
                <h1>Project List</h1>
                <Link to='/addPortfolio'><button><i class="fa-solid fa-plus"></i> Add Project</button></Link>
            </div>

            <table className='admin_table'>
                <tr>
                    <th>no</th>
                    <th>image</th>
                    <th>project name</th>
                    <th>short details</th>
                    <th>action</th>
                </tr>
                {portfolio.map((item, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td ><img key={item._id} className='image' src={item.image} alt="Uploaded" /></td>
                        <td>{item.p_name}</td>
                        <td>{item.s_detail}</td>
                        <td>
                            <div className="action">
                                <Link to={"/portfolioView/" + item._id}><i class="fa-regular fa-eye"></i></Link>
                                <Link to={"/updatePortfolio/" + item._id}><i class="fa-solid fa-pen-to-square"></i></Link>
                                <i onClick={() => deleteProject(item._id)} class="fa-solid fa-trash"></i>
                            </div>
                        </td>
                    </tr>
                )}
            </table>

        </>
    )
}

export default Portfolio
