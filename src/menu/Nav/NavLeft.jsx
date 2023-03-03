import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Nav/Nav.css'

const Nav_left = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth) {
            navigate('/logIn')
        }
    })

    return (
        <>
            <div className="nav_container_left ">
                <li><Link to='/'><img src={require('../img/Aimers logo.png')} alt="img not display" /></Link></li>
                <Link to='/'><h2 className="nav_title">Aimers Infotech</h2></Link>
                {auth ?
                    <div className="nav_menu">
                        <Link to="/"><li>Dashboard</li></Link>

                        <li><details>
                            <summary>Employess management</summary>
                            <Link to='/employess'><p> Employess List</p></Link>
                            <Link to='/addEmployess'><p> Add Employess</p></Link>
                        </details></li>

                        <Link to='contact'><li>Contact List</li></Link>

                        <li><details>
                            <summary>Portfolio</summary>
                            <Link to="Portfolio"><p>Project List</p></Link>
                            <Link to='addPortfolio'><p>Add Project</p></Link>
                        </details></li>

                        <li><details>
                            <summary>client management</summary>
                            <Link to='Client'><p>Client List</p></Link>
                            <Link to='addClient'><p>Add Client</p></Link>
                        </details></li>

                        <li><details>
                            <summary>vacancy management</summary>
                            <Link to='vacancy'><p>vacancy List</p></Link>
                            <Link to='addVacancy'><p>Add vacancy</p></Link>
                        </details></li>

                    </div>
                    : <>
                        <div className="nav_menu">
                            <h2> First Login</h2>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Nav_left;