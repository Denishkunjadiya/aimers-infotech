import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    const [Client, setClient] = useState([]);

    const getClient = async () => {
        let result = await fetch("http://localhost:5000/client")
        result = await result.json();
        setClient(result);
    }

    useEffect(() => { getClient(); }, [])


    // --------------count
    const [Employes, setEmploye] = useState([]);
    const [Project, setProject] = useState([]);
    const [CountClient, setCountClient] = useState([]);

    const getCountEmploye = async () => {
        let result = await fetch("http://localhost:5000/employeCount")
        result = await result.json();
        setEmploye(result)
    }


    const getCountProject = async () => {
        let result = await fetch("http://localhost:5000/portfolioCount")
        result = await result.json();
        setProject(result)
    }

    const getCountClient = async () => {
        let result = await fetch("http://localhost:5000/clientCount")
        result = await result.json();
        setCountClient(result)
    }

    useEffect(() => {
        getCountEmploye();
        getCountProject();
        getCountClient();

    }, [])



    return (
        <>
            <div className="home">


                <div className="slid">
                </div>
                <div className="wwd">
                    <h2>What we do ?</h2>
                    <hr />

                    {/* ----------------------------- */}

                    <h3>We provide below services for your IT solution.</h3>
                    <div className="wwd_card">
                        <div className="card">
                            <div className="c_head">
                                <i class="fa-solid fa-desktop"></i>
                                <h2>Software Development </h2>
                            </div>
                            <p>Our Software Development ability has helped to business challenges like expanding data development, logical problem.</p>
                        </div>
                        <div className="card">
                            <div className="c_head">
                                <i class="fa-sharp fa-solid fa-mobile-screen-button"></i>
                                <h2>Mobile Application</h2>
                            </div>
                            <p>The mobile apps have become an essential part of the human life. Almost everything is available on mobile apps.</p>
                        </div>
                        <div className="card">
                            <div className="c_head">
                                <i class="fa-solid fa-code"></i>
                                <h2>Web Development</h2>
                            </div>
                            <p>Our Software Solutions is a fully equipped web design company situated in India. We make business oriented web.</p>
                        </div>
                    </div>
                </div>

                {/* ------------------------ */}

                <div className="positivity">
                    <div className="positivity_text">
                        <h1>Here is reason.</h1>
                        <div className="p_card_container">
                            <div className="p_card">
                                <h1>Experience</h1>
                                <p>We working in IT industry from last 7 years. we have expertise on how this industry function.</p>
                            </div>
                            <div className="p_card">
                                <h1>Respond Quickly</h1>
                                <p>Our specialists will respond to emergencies in less than one hour. You can contact us via phone or submit a service ticket online with our web.</p>
                            </div>
                            <div className="p_card">
                                <h1>Business Savvy</h1>
                                <p>We evaluate, design, and justify technology solutions from an understanding of your business needs and budgetary constraints.</p>
                            </div>
                        </div>
                    </div>
                    <div className="positivity_img">
                        <img src={require('../img/why us.jpg')} alt="" />
                    </div>
                </div>

                {/* -------------- */}

                <h1 className='client_h1'>Our Client</h1>
                <div className="client_container">
                    {Client.map((item) => <>
                        <div className="client">
                            <div className="card_client"><img src={item.image} alt="img is hear" /></div>
                            <div className="card_client">{item.name}</div>
                        </div>
                    </>
                    )}
                </div>

                {/* ----------------count */}

                <div className="count_container">
                    <div className="count_card">
                        <h1>Employess</h1>
                        <h1>{Employes.count}</h1>
                    </div>
                    <div className="count_card">
                        <h1>project</h1>
                        <h1>{Project.count}</h1>
                    </div>
                    <div className="count_card">
                        <h1>Client</h1>
                        <h1>{CountClient.count}</h1>
                    </div>
                </div>

                {/* ******************* */}

                {/* ------------------------- */}

                <div className="anyque">
                    <p>
                        Do you have any question?
                        Feel free to contact us anytime.
                    </p>

                    <Link to="/contact"><button>Contact Us Now</button></Link>
                </div>
                {/* ******************* */}
                {/* --------------------------- */}

                <div className="review">
                    <h4>people say about us</h4>
                    <hr />

                    <div className="r_card_c">

                        <div className="r_card">
                            <p>“You’ve read about the impoce of the being courageous, rebelliousi and it’s imaginative. These are all vital for ingredients in an effective advertising they must.”</p>
                            <div className="r_card_foot">
                                <img src={require('../img/Aimers logo.png')} alt="" />
                                <div className="r_name">
                                    <h1>Patricia Muller</h1>
                                    <h5>WordPress Developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="r_card">
                            <p>“You’ve read about the impoce of the being courageous, rebelliousi and it’s imaginative. These are all vital for ingredients in an effective advertising they must.”</p>
                            <div className="r_card_foot">
                                <img src={require('../img/Aimers logo.png')} alt="" />
                                <div className="r_name">
                                    <h1>John fantas</h1>
                                    <h5>Engeneer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="r_card">
                            <p>“You’ve read about the impoce of the being courageous, rebelliousi and it’s imaginative. These are all vital for ingredients in an effective advertising they must.”</p>
                            <div className="r_card_foot">
                                <img src={require('../img/Aimers logo.png')} alt="" />
                                <div className="r_name">
                                    <h1>Michael Clark</h1>
                                    <h5>Graphic Designer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="r_card">
                            <p>“You’ve read about the impoce of the being courageous, rebelliousi and it’s imaginative. These are all vital for ingredients in an effective advertising they must.”</p>
                            <div className="r_card_foot">
                                <img src={require('../img/Aimers logo.png')} alt="" />
                                <div className="r_name">
                                    <h1>Michael Clark</h1>
                                    <h5>Graphic Designer</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
