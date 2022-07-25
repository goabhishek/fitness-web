import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './component/Header';
import Footer from './component/Footer';
import SignUpPage from './Pages/SignUpPage';
import Pricing from './Pages/Pricing';
import About from './Pages/About';
import SignInPage from './Pages/SignInPage';
import ForgetPassword from './Pages/ForgetPassword';
import ContactPage from './component/ContactPage';
import Peoples from './Pages/Peoples';
import Trainers from './Pages/Trainers';
import Cources from './Pages/Cources';
import IosApp from './component/IosApp';
import AndroidApp from './component/AndroidApp';
import ButtonOn from './component/ButtonOn';
import AppButton from './component/AppButton';
import Input from './component/Input';
import Getapppage from './component/Getapppage';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/Header' element={<Header />} />
        <Route exact path='/SignUpPage' element={<SignUpPage />} />
        <Route exact path='/Pricing' element={<Pricing />} />
        <Route exact path='/SignInPage' element={<SignInPage />} />
        <Route exact path='/ForgetPassword' element={<ForgetPassword />} />
        <Route exact path='/ContactPage' element={<ContactPage />} />
        <Route exact path='/Peoples' element={<Peoples />} />
        <Route exact path='/Trainers' element={<Trainers />} />
        <Route exact path='/Cources' element={<Cources />} />
        <Route exact path='/IosApp' element={<IosApp />} />
        <Route exact path='/AndroidApp' element={<AndroidApp />} />
        <Route exact path='/ButtonOn' element={<ButtonOn />} />
        <Route exact path='/AppButton' element={<AppButton />} />
        <Route exact path='/Input' element={<Input />} />
        <Route exact path='/Getapppage' element={<Getapppage />} />
      </Routes>

      <Footer />
    </ChakraProvider>
  );
}

export default App;
