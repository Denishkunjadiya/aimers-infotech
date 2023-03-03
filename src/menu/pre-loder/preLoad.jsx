import React from 'react'
import './preLoad.css'

function PreLoad() {
    return (
        <>
            {/* <div className="pre_loding">
                <img src={require('../img/Aimers logo.png')} alt="img not display" />
                <div className="loding"></div>
            </div> */}
            <div className="loding_compo">
                <div className="loding">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <span>
                        <img src={require('../img/Aimers logo.png')} alt="img not display" />
                        Loding...
                    </span>
                </div>
            </div>

            {/* <div class="pencil">
                <div class="pencil__ball-point"></div>
                <div class="pencil__cap"></div>
                <div class="pencil__cap-base"></div>
                <div class="pencil__middle"></div>
                <div class="pencil__eraser"></div>
            </div>
            <div class="line"></div>
            <h2>Page Loading...Please Wait</h2> */}
        </>
    )
}

export default PreLoad
