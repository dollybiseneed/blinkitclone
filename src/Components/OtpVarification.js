
// import React, { useState, useEffect, useRef } from 'react';
// import './OtpVarification.css';

// const OTPVerification = ({ setOtpSent }) => {
//   const [countdown, setCountdown] = useState(24);
//   const [otpInput, setOtpInput] = useState({
//     first: "", second: "", third: "", fourth: ""
//   });
//   const [message, setMessage] = useState('');
//   const resendBtnRef = useRef(null);
//   const inputRefs = useRef([null, null, null, null]);
 

//   // Handle countdown timer
//   useEffect(() => {
//     let interval;
//     if (countdown > 0) {
//       interval = setInterval(() => setCountdown((prev) => prev - 1), 1000);
//     } else {
//       clearInterval(interval);
//       resendBtnRef.current.disabled = false;
//     }
//     return () => clearInterval(interval);
//   }, [countdown]);

//   // Handle OTP input logic
//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     setOtpInput({ ...otpInput, [e.target.name]: value });
//     if (value && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };


//   // Resend OTP Logic
//   const handleResendOtp = () => {
//     if (countdown === 0) {
//       const newOtp = Math.floor(1000 + Math.random() * 9000); // Generate a new OTP
//       alert(`New OTP sent: ${newOtp}`);
//       localStorage.setItem('otp', newOtp); // Store the new OTP
//       setCountdown(24); // Reset countdown
//       resendBtnRef.current.disabled = true;
//     }
//   };

//   const handleVerifyOtp = () => {
//     const enteredOtp = Object.values(otpInput).join('');
  
//     if (enteredOtp.length < 4) {
//       setMessage('Please enter the complete 4-digit OTP');
//       return;
//     }
  
//     const storedOtp = localStorage.getItem('otp');
  
//     if (enteredOtp === storedOtp) {
//       setMessage('OTP Verified Successfully!');
//       setOtpSent(false);
//     } else {
//       setMessage('Invalid OTP, please try again.');
//     }
//   };
  
//   return (
//     <div className="otp-container">
//       <div className="otp-box">
//         <h3>OTP Verification</h3>
//         <p>We have sent a verification code to +91</p>
//         <div className="ddrcode-inputs">
//           <input
//             ref={(el) => inputRefs.current[0] = el}
//             name="first"
//             onChange={(e) => handleChange(e, 0)}
//             type="number"
//             maxLength="1"
//             disabled={false}
//             autoFocus
//             className="ddrcode-input"
//           />
//           <input
//             ref={(el) => inputRefs.current[1] = el}
//             name="second"
//             onChange={(e) => handleChange(e, 1)}
//             type="number"
//             maxLength="1"
//             className="ddrcode-input"
//           />
//           <input
//             ref={(el) => inputRefs.current[2] = el}
//             name="number"
//             onChange={(e) => handleChange(e, 2)}
//             type="text"
//             maxLength="1"
//             className="ddrcode-input"
//           />
//           <input
//             ref={(el) => inputRefs.current[3] = el}
//             name="fourth"
//             onChange={(e) => handleChange(e, 3)}
//             type="number"
//             maxLength="1"
//             className="ddrcode-input"
//           />
//         </div>
//         <button onClick={handleVerifyOtp}>Verify OTP</button>
//         {message && <p>{message}</p>}
//         <button
//           ref={resendBtnRef}
//           onClick={handleResendOtp}
//           disabled={countdown !== 0}
//         >
//           {countdown === 0 ? "Resend Code" : `Resend Code (in ${countdown} secs)`}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OTPVerification;


   
