

// import React, { useState } from 'react';
// import './LoginPage.css';
// import OtpInput from "otp-input-react";
// import {CgSpinner} from "react-icons/cg";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'

// const LoginPage = ({ isOpen, onClose, setOtpSent }) => {
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [isButtonClicked, setIsButtonClicked] = useState(false);
//   const [otp, setOTP] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [showOTP, setShowOTP] = useState(false);
//   const[user,setUser]=useState(null);

//   if (!isOpen) return null; // Close modal if it's not open

//   const handleContinue = () => {
//     setShowOTP(true);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>×</button>
//         <div className="logo">
//           <img src="images/blinkit-logo.png" alt="Blinkit Logo" />
//         </div>
//         <h2>India's Last Minute App</h2>
//         <p>Log in or Sign up</p>
//         {showOTP ? (
//           <>
//             <div className="input-group">
//               <span>+91</span>
//             </div>
//             <span htmlFor='otp' className={`continue-button`}>
//               Continue
//             </span>
//             <p className="terms">
//               By continuing, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
//             </p>

//             <OtpInput 
//               OTPLength={4} 
//               otpType="number"
//               value={otp}
//               onChange={(otp) => setOTP(otp)}
//               disable={false}
//               autoFocus
//               className="ddrcode-input"
//             />

//             <button className="bg-emerable-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
//               {
//                 loading && <CgSpinner size={20} className='mt-1 animate-spin'/>
//               }
//               <span>Verify OTP </span>
//             </button>
//           </>
//         ) : (
//           <PhoneInput 
//             country={"in"} 
//             value={phone} 
//             onChange={(phone) => setPhone(phone)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// =============================================2222222222222222222222222222222============================

import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";


const LoginPage = (onClose) => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      // window.recaptchaVerifier = new RecaptchaVerifier(
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          size: "invisible",
          callback: (response) => {
            onSignInSubmit();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignInSubmit() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
   
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div className="modal-overlay">
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            
            <h2>India's Last Minute App</h2>
        <p>Log in or Sign up</p>

            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
{/* 
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label> */}
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignInSubmit}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Continue</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>

    </section>
  );
};
export default LoginPage;
