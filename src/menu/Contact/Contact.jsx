import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [name, setName] = useState("");
    const [e_mail, setEmail] = useState("");
    const [mobile_no, setMobileNO] = useState("");
    const [msg, setMsg] = useState("");

    const submitContact = async () => {
        let result = await fetch('http://localhost:5000/contact', {
            method: 'post',
            body: JSON.stringify({ name, e_mail, mobile_no, msg }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json()
        console.log(result)
    }

    return (
        <>

            <div className="contact_img">
                <div>
                    <h1>Contact Us</h1>
                    <h2>Send Us Your Feedback, We Love Hearing It!</h2>
                </div>
            </div>

            <div className="contact_info">
                <div className="contact_card">
                    <div className="c_card">
                        <div className="c_card_top">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <h1>location</h1>
                        </div>
                        <p>101,1st Floor, Parshwa Tower,, Above Kotak Mahindra Bank, SG Highway, Bodakdev, near Pakwan II, Ahmedabad, Gujarat 380054.</p>
                    </div>
                    <div className="c_card">
                        <div className="c_card_top">
                            <i class="fa-solid fa-business-time"></i>
                            <h1>working hour</h1>
                        </div>
                        <p>Monday to Saturday <br />9 AM – 7 PM</p>
                    </div>
                    <div className="c_card">
                        <div className="c_card_top">
                            <i class="fa-solid fa-envelope"></i>
                            <h1>E-mail</h1>
                        </div>
                        <p>aimers@gmail.com</p>
                    </div>
                    <div className="c_card">
                        <div className="c_card_top">
                            <i class="fa-solid fa-phone-volume"></i>
                            <h1>mobile no.</h1>
                        </div>
                        <p>(+91) 8140004393.</p>
                    </div>
                </div>
            </div>

            <div className="contact_c">
                <div className="contact_form">
                    <div className="contact_left">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact_right">
                        <form action="">

                            <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' /><br />
                            <input type="text" name="" id="" value={e_mail} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-Mail' /><br />
                            <input type="text" name="" id="" value={mobile_no} onChange={(e) => setMobileNO(e.target.value)} placeholder='Contact No.' /><br />

                            <textarea name="" id="" cols="30" rows="5" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message'></textarea>
                            <button onClick={submitContact}>Send</button>
                            <button>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact
