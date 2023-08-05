import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './menu/Home/Home';
import NavLeft from './menu/Nav/NavLeft';
import NavTop from './menu/Nav/NavTop';
import Footer from './menu/Footer/Footer';
import AddEmployess from './menu/Employess/AddEmployess';
import Employess from './menu/Employess/Employess';
import Contact from './menu/Contact/Contact'
import Portfolio from './menu/Portfolio/Portfolio'
import AddPortfolio from './menu/Portfolio/AddPortfolio'
import Client from './menu/Client/Client'
import AddClient from './menu/Client/AddClient'
import Vacancy from './menu/Vacancy/Vacancy'
import AddVacancy from './menu/Vacancy/AddVacancy'
import Profile from './menu/LogIn/Profile';
import LogIn from './menu/LogIn/LogIn';
import UpdateClient from './menu/Client/UpdateClient';
import UpdatePortfolio from './menu/Portfolio/UpdatePortfolio';
import UpdateVacancy from './menu/Vacancy/UpdateVacancy';

import Register from './menu/LogIn/Register'
import PriveteComponent from './menu/PriveteComponent';
import UpdateEmploye from './menu/Employess/UpdateEmploye';
import UpdateProfile from './menu/LogIn/UpdateProfile';
import Singleproject from './menu/Portfolio/Singleproject';

function App() {
  return (
    <>
      <BrowserRouter>

        <div className="admin">
          <div className="a_left"><NavLeft /></div>
          <div className="a_right">
            <NavTop />
            <div className="right_center">
              <Routes>

                <Route element={<PriveteComponent />}>
                  <Route path='/' element={<Home />}></Route>

                  <Route path='/employess' element={<Employess />}></Route>
                  <Route path='/addEmployess' element={<AddEmployess />}></Route>
                  <Route path='/updateEmployes/:id' element={<UpdateEmploye />}></Route>

                  <Route path='/contact' element={<Contact />} />

                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/addPortfolio' element={<AddPortfolio />} />
                  <Route path='/updatePortfolio/:id' element={<UpdatePortfolio />} />
                  <Route path='/portfolioView/:id' element={<Singleproject />} />

                  <Route path='/client' element={<Client />} />
                  <Route path='/addClient' element={<AddClient />} />
                  <Route path='/updateClient/:id' element={<UpdateClient />} />

                  <Route path='/vacancy' element={<Vacancy />} />
                  <Route path='/addVacancy' element={<AddVacancy />} />
                  <Route path='/updateVacancy/:id' element={<UpdateVacancy />} />

                  <Route path='/profile' element={<Profile />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/updateRegister/:id' element={<UpdateProfile />} />

                </Route>

                <Route path='/logIn' element={<LogIn />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>




      {/* 
      <Router>
        <div className="admin">
          <div className="a_left"><NavLeft /></div>
          <div className="a_right">
            <NavTop />
            <div className="right_center">

              <Route path='/' exact component={Home}></Route>
              <Route path='/employess' component={Employess}></Route>
              <Route path='/addEmployess' component={AddEmployess}></Route>
              <Route path='/contact' component={Contact} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/addPortfolio' component={AddPortfolio} />
              <Route path='/client' component={Client} />
              <Route path='/addClient' component={AddClient} />
              <Route path='/vacancy' component={Vacancy} />
              <Route path='/addVacancy' component={AddVacancy} />
              <Route path='/profile' component={Profile} />
              <Route path='/logIn' component={LogIn} />

              <Route path='/image' component={image} />
              <Route path='/addImage' component={u_image} />
              <
            </div>
            <Footer />
          </div>
        </div>
      </Router> */}
    </>
  );
}

export default App;
