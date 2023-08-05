import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';



const Footer = () => {
    const [Vacancy, setVacancy] = useState([]);

    const getCountVacancy = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/vacancyCount")
        result = await result.json();
        setVacancy(result)
    }

    useEffect(() => { getCountVacancy(); }, [])

    return (
        <>
            <div className="footer">

                <div className="f_left">
                    <div className="f_title">
                        <Link to='/'><img src={require('../img/Aimers logo.png')} alt="" /></Link>
                        <Link to='/'><h1>Aimers Infotech</h1></Link>
                    </div>
                    <div className="links_container">
                        <div className="links">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </div>
                        <div className="links">
                            <li><Link to="/vacancy">vacancy ({Vacancy.count})</Link></li>
                        </div>
                    </div>


                </div>
                <div className="f_right">
                    <h1>contact information</h1>
                    <hr />
                    <i class="fa-solid fa-location-dot"></i><p>101,1st Floor, Parshwa Tower,, Above Kotak Mahindra Bank, SG Highway, Bodakdev, near Pakwan II, Ahmedabad, Gujarat 380054.</p>
                    <i class="fa-solid fa-phone-volume"></i><p> (+91) 8140004393.</p>
                    <i class="fa-solid fa-envelope"></i><p>aimers@gmail.com</p>
                </div>

            </div>

            <div className="copy">
                <p>Copyright © 2023 Denish Kunjadiya | All Right Reserved.</p>
                <div className="f_icon">
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </>
    )
}

export default Footer
