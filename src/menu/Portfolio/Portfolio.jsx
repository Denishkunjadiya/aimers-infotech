import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'


const Portfolio = () => {

    const [portfolio, setPortfolio] = useState([]);

    const getPortfolio = async () => {
        let result = await fetch('http://localhost:5000/portfolio');
        result = await result.json();
        setPortfolio(result);
    }

    useEffect(() => { getPortfolio(); }, [])


    return (
        <>
            <div className="portfolio">
                <h1 className="p_title">
                    Portfolio
                </h1>
                <hr />
                <div className="portfolio_c">
                    <div className="portfolio_card_c">

                        {portfolio.map((item) =>
                            <div className="portfolio_card">
                                <div className="portfolio_card_img">
                                    <img key={item._id} className='image' src={item.image} alt="Uploaded" />
                                </div>
                                <div className="portfolio_card_details_btn">
                                    <div className="portfolio_card_details">
                                        <h1>{item.p_name}</h1>
                                        <p>{item.s_detail}…</p>
                                    </div>
                                    <div className="portfolio_card_details_btn_right">
                                        <Link to={"/portfolio-single/" + item._id}> <h1>></h1></Link>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
