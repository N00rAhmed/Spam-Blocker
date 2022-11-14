import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import Logo from '../pictures/Rocket.png';
// npm install @mui/icons-material --force
// npm i emailjs-com --save

import '../styles/main.css';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

function Main() {
    
  const onChange = () => {};

  const navigate = useNavigate();
  
  const gotToFirstComp = () => {  
    navigate('/first'); 
  };



  return (
    <div className="App">
        <div className='banner'>
            <img src={Logo} alt="image" />
        </div>
      <header className="App-header">
        <p>Register Account</p>
        
        <div className='text-field'>
            <input type="text" placeholder='username' name='name'></input>
            </div>
            
            <div className='text-fieldtwo'>
                <input type="password" placeholder='password' name='password'></input>
                <br/>
            </div>

            <div className='text-fieldthree'>
            <input type="text" placeholder='email' name='email'></input>
            </div>

            <div className='captcha'>
                <ReCAPTCHA sitekey='6Lc6gQQjAAAAAE3dKEwtmGASjOwKQkTLGWAkG5rE' onChange={onChange} />
            </div>
        <button onClick={gotToFirstComp}>Register</button>
      </header>
    </div>
  );
}



  
export default Main;
