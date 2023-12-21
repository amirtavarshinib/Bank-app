import React, { useState } from 'react';
import './Signin.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username.trim() !== '' && password.trim() !== ''&& email.trim()!== '') {
      setLoggedIn(true);
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className='login_container'>
        <div>
            <div className='imag'>
            </div>
          <form>
            <h3 style={{color:'white'}}>Create new account</h3><br/>
            <label>
              <input
                type="text"
                value={username}
                placeholder='Enter Your Name'
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                value={email}
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={password}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br /><br/>
            <center><Link to='/MenuAppBar'><button type="button" class="btn btn-light"  onClick={handleLogin} style={{color:"black"}}>Sign up</button></Link><br/></center>
          </form>
        </div>
    </div>
  );
};

export default SignIn;
