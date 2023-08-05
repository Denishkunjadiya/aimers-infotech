import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const Singleproject = () => {
    const [portfolio, setPortfolio] = useState([]);
    const params = useParams();

    const getPortfolio = async (id) => {
        let result = await fetch(`https://aimers-backend.onrender.com/portfolio/${params.id}`);
        result = await result.json();
        setPortfolio(result)
    }

    useEffect(() => {
        getPortfolio();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className="single_project">
                <div className="admin_page_top singleData">
                    <h2>{portfolio.p_name}</h2>
                    <Link to='/portfolio'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
                </div>
                <div className="details">


                    <div className="fild">
                        <h3>project Name :  </h3>
                        <span>{portfolio.p_name}</span>
                    </div>


                    <div className="fild">
                        <h3>Types of Porject : </h3>
                        <span>{portfolio.p_type}</span>
                    </div>

                    <div className="fild">
                        <h3>Made by : </h3>
                        <span>{portfolio.made_by}</span>
                    </div>

                    <div className="fild">
                        <span><img key={portfolio._id} className='image' src={portfolio.image} alt="Uploaded" /></span>
                    </div>

                    <div className="fild">
                        <h3>Short details : </h3>
                        <span>{portfolio.s_detail}</span>
                    </div>

                    <div className="fild">
                        <h3>Long details  </h3>
                        <span>{portfolio.l_detail}</span>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Singleproject
