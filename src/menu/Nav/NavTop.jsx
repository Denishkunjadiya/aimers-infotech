import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav_top = () => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    const auth = localStorage.getItem('user')

    return (
        <>
            <div className="nav_top">
                {auth ? <>
                    <ul className='mainMenu'>
                        <li>
                            <h2>{auth ? <span>{JSON.parse(auth).name} :  </span> : <></>}  User<i class="fa-regular fa-user" /></h2>
                            <ul className='subMenu'>
                                <Link to='/profile'><li>Profile</li></Link>
                                <Link to='/logIn'><li onClick={logOut}>  Log Out <i class="fa-sharp fa-solid fa-power-off"></i></li></Link>
                            </ul>
                        </li>
                    </ul>
                </> : <h1>First Log In</h1>}
            </div>
        </>
    )
}

export default Nav_top
