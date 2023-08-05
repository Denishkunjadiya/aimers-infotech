import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Portfolio_singl = () => {

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
            <div className="p_single">
                <h1 className='p_single_title'>{portfolio.p_name}</h1>
                <hr />
                <div className="p_single_c">
                    <div className="p_single_left">
                        <img key={portfolio._id} className='image' src={portfolio.image} alt="Uploaded" />
                    </div>
                    <div className="p_single_right">
                        <h1>Title : {portfolio.p_name}</h1>
                        <h3>{portfolio.p_type}</h3>
                        <h3>Made By : {portfolio.made_by}</h3>
                        <p>{portfolio.s_detail}</p>
                        <p>{portfolio.l_detail}</p>
                    </div>
                </div>

                {/* <div className="p_single_gallary">
                    <img src={require('../img/pexels-jopwell-2422286.jpg')} alt="" />
                    <img src={require('../img/pexels-jopwell-2422286.jpg')} alt="" />
                    <img src={require('../img/pexels-jopwell-2422286.jpg')} alt="" />
                    <img src={require('../img/pexels-jopwell-2422286.jpg')} alt="" />
                    <img src={require('../img/pexels-jopwell-2422286.jpg')} alt="" />
                </div> */}

            </div>
        </>
    )
}

export default Portfolio_singl
