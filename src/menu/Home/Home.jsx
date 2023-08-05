import React, { useEffect, useState } from "react";
import './Home.css'



const Home = () => {
    const [Employes, setEmploye] = useState([]);
    const [Contact, setContact] = useState([]);
    const [Project, setProject] = useState([]);
    const [Client, setClient] = useState([]);
    const [Vacancy, setVacancy] = useState([]);

    const getCountEmploye = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/employeCount")
        result = await result.json();
        setEmploye(result)
    }

    const getCountContact = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/contactCount")
        result = await result.json();
        setContact(result)
    }

    const getCountProject = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/portfolioCount")
        result = await result.json();
        setProject(result)
    }

    const getCountClient = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/clientCount")
        result = await result.json();
        setClient(result)
    }

    const getCountVacancy = async () => {
        let result = await fetch("https://aimers-backend.onrender.com/vacancyCount")
        result = await result.json();
        setVacancy(result)
    }

    useEffect(() => {
        getCountEmploye();
        getCountContact();
        getCountProject();
        getCountClient();
        getCountVacancy();

    }, [])


    return (
        <>
            <div className="card_admin">
                <div className="card">
                    <h1>Employess</h1>
                    <h1>{Employes.count}</h1>
                </div>
                <div className="card">
                    <h1>Contact</h1>
                    <h1>{Contact.count}</h1>
                </div>
                <div className="card">
                    <h1>project</h1>
                    <h1>{Project.count}</h1>
                </div>
                <div className="card">
                    <h1>Client</h1>
                    <h1>{Client.count}</h1>
                </div>
                <div className="card">
                    <h1>Vacancy</h1>
                    <h1>{Vacancy.count}</h1>
                </div>
            </div>
        </>
    )
}

export default Home
