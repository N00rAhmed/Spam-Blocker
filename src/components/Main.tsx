import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function Main() {
    
  const onChange = () => {};

  const navigate = useNavigate();
  
  const gotToFirstComp = () => {  
    navigate('/first'); 
  };



  return (
    <div className="App">
      <header className="App-header">
        <p>Register Account</p>
        <input type="text" placeholder='username'></input>
        <input type="password" placeholder='password'></input>
        <br/>
        <ReCAPTCHA sitekey='6Lc6gQQjAAAAAE3dKEwtmGASjOwKQkTLGWAkG5rE' onChange={onChange} />
        <button onClick={gotToFirstComp}>Register</button>
      </header>
    </div>
  );
}


// reCAPTCHA couldn't find user-provided function: onloadCallback

  
export default Main;
