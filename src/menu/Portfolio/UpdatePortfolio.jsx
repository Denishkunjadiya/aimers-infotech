import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

const UpdatePortfolio = () => {

  const [p_name, setName] = useState("");
  const [p_type, setType] = useState("")
  const [image, setImg] = useState("");
  const [made_by, setMadeBy] = useState("");
  const [s_detail, SetSdetail] = useState("");
  const [l_detail, setLdetail] = useState("");

  const [error, setError] = useState(false)

  const parms = useParams();
  const navigate = useNavigate();


  const updatePortfolio = (e) => {

    e.preventDefault();

    if (!p_name || !p_type || !made_by || !s_detail) {
      setError(true);
      return false;
    }

    const formData = new FormData();
    formData.append('pName', p_name)
    formData.append('pType', p_type)
    formData.append('image', image)
    formData.append('madeBy', made_by)
    formData.append('SDetail', s_detail)
    formData.append('LDetail', l_detail)

    fetch(`http://localhost:5000/portfolio/${parms.id}`, {
      method: "Put",
      body: formData
    })
      .then(response => response.json())
    navigate('/portfolio');


  }

  const getPortfolioDetails = async () => {
    let result = await fetch(`http://localhost:5000/portfolio/${parms.id}`);
    result = await result.json();
    setName(result.p_name);
    setType(result.p_type)
    setMadeBy(result.made_by)
    SetSdetail(result.s_detail)
    setLdetail(result.l_detail)
  }

  useEffect(() => {
    getPortfolioDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>

      <div className="admin_page_top add_page">
        <h1>Update Project</h1>
        <Link to='/portfolio'><button><i class="fa-solid fa-angle-left"></i>Back</button></Link>
      </div>
      <form className='add_name'>

        <div className="row">
          <div className="col">
            <h4>Enter Project name</h4>
            <input type="text" value={p_name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Project Name' />
            <br />
            {error && !p_name && <span className='error'>**please Enter valid name</span>}

          </div>
          <div className="col">
            <h4>type of project</h4>
            <input type="text" value={p_type} onChange={(e) => setType(e.target.value)} placeholder='Ex. website,aplication' />
            <br />
            {error && !p_type && <span className='error'>**please Enter valid type</span>}

          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>uplode image</h4>
            <input type="file" placeholder='' onChange={(e) => setImg(e.target.files[0])} />

          </div>
          <div className="col">
            <h4>Made By</h4>
            <input type="text" placeholder='Enter Name Of Devloper' value={made_by} onChange={(e) => setMadeBy(e.target.value)} />
            <br />
            {error && !made_by && <span className='error'>**please Enter valid name</span>}

          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Enter Short Details</h4>
            <textarea name="" placeholder='Enter Short Details' value={s_detail} onChange={(e) => SetSdetail(e.target.value)} id="" cols="30" rows="10"></textarea>
            <br />
            {error && !s_detail && <span className='error'>**please Enter valid details</span>}
          </div>
          <div className="col">
            <h4>Enter Long Details</h4>
            <textarea name="" placeholder='Enter Long Details' value={l_detail} onChange={(e) => setLdetail(e.target.value)} id="" cols="40" rows="10"></textarea>
          </div>
        </div>

        <div className="row">
          <button onClick={updatePortfolio}>Update</button>
          <button>Clear</button>
        </div>
      </form>

    </>

  )
}

export default UpdatePortfolio
