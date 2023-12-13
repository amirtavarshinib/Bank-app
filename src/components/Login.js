import React, { useState } from 'react';
import './log.css';
import 'bootstrap/dist/css/bootstrap.css';
const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <center><h2>Welcome back !</h2></center>
          {/* Add your banking application content here */}
        </div>
      ) : (
        <div>
            <div className='imag'>
            </div>
          <form>
            <h3 style={{color:'white'}}>Login</h3><br/>
            <label>
              <input
                type="text"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br /><br/>
            <center><button type="button" class="btn btn-danger" onClick={handleLogin} style={{width:'4cm'}}>Login</button><br/></center><br/>
            <div className='Link' onClick={()=>props.onFormSwitch('signup')}>New user ?<a href='#' style={{color:'white'}}>Sign up</a></div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;