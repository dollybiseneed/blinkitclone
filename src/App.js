import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; 
import LoginPage from './Components/LoginPage';
import OTPVerification from './Components/OtpVarification';
import HomePage from './Components/HomePage';
// import Cart from './Components/Cart';
import './App.css';

function App() {
  const [isOtpSent, setOtpSent] = useState(false); // State to track OTP send status
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when the button is clicked
  };

  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <Routes>
          {!isOtpSent ? (

            <Route path="loginPage" element={<LoginPage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setOtpSent={setOtpSent} />}/>
          ) : (
        <OTPVerification setOtpSent={setOtpSent} />
      )}
            <Route path="otpVerification" element={<OTPVerification />} />
            <Route path="" element={<HomePage />} />
            {/* <Route path="cart" element={<Cart/>} /> */}

            <Route path="homepage" element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}
export default App;
