import React, { useEffect, useState } from 'react'
import './About.css'

const About = () => {

    const [employes, setEmployes] = useState([]);

    const getEmployes = async () => {
        let result = await fetch('http://localhost:5000/employe');
        result = await result.json();
        setEmployes(result);
    }

    useEffect(() => { getEmployes(); }, [])


    return (
        <>
            <div className="about_img"></div>
            <div className="about_info">
                <div className="about_info_left">
                    <img src={require('../img/About group.png')} alt="" />
                </div>
                <div className="about_info_right">
                    <h3>We Are Here For</h3>
                    <h1>Make Best Product</h1>
                    <p>If you are a company that wants to have a digital presence, then you need to have a high-quality website and mobile application. We are a customer focused company that gives you amazing results in the shortest possible time. With Baadam tools, you don’t need to hire expensive agencies to build web solutions for you. We provide you with great tools that enable you to build an app within minutes. With our App maker and Website builder, getting high-quality websites and apps are as easy as 1-2-3. We have expertise in dynamic multi-vendor projects that includes mobile applications.</p>

                </div>
            </div>

            <div className="our_expertise" id="our_expertise">
                <h1>Our Expertise</h1>
                <hr />
                <div className="expertise_card_c">
                    <div className="expertise_card">
                        <i class="fa-brands fa-react"></i>
                        <h1>react</h1>
                    </div>
                    <div className="expertise_card">
                        <i class="fa-brands fa-angular"></i>
                        <h1>angular</h1>
                    </div>
                    <div className="expertise_card">
                        <i class="fa-brands fa-laravel"></i>
                        <h1>laravel</h1>
                    </div>
                    <div className="expertise_card">
                        <i class="fa-brands fa-magento"></i>
                        <h1>magento</h1>
                    </div>
                    <div className="expertise_card">
                        <i class="fa-brands fa-android"></i>
                        <h1>android</h1>
                    </div>
                    <div className="expertise_card">
                        <i class="fa-brands fa-apple"></i>
                        <h1>apple</h1>
                    </div>
                </div>
            </div>


            {/* our team */}
            <div className="o_team">

                <h1>our team</h1>
                <hr />

                <div className="leader">

                    <div className="leader_card">
                        <img src={require('../img/Male.jpg')} alt="" />
                        <div className="leader_details">
                            <h2>Arun M. Chopada</h2>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div className="leader_card">
                        <img src={require('../img/female.png')} alt="" />
                        <div className="leader_details">
                            <h2>Maya bhanderi</h2>
                            <p>HR</p>
                        </div>
                    </div>

                </div>

                <div className="employess">
                    <h1>employess</h1>

                    <div className="employess_card_c">

                        {employes.map((item) =>
                            <div className="employess_card">
                                <img key={item._id} className='image' src={item.image} alt="Uploaded" />
                                <div className="employess_details">
                                    <h1>{item.name}</h1>
                                    <p>{item.ability}  </p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>

        </>
    )
}

export default About
