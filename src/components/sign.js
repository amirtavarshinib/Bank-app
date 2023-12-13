import React, { useState } from 'react';
import './log.css';
import 'bootstrap/dist/css/bootstrap.css';
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
    <div>
      {loggedIn ? (
        <div>
          <center><h2>Welcome , {username}.Thank you for Signing up!</h2></center>
          {/* Add your banking application content here */}
        </div>
      ) : (
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
            <center><button type="button" class="btn btn-danger" onClick={handleLogin} style={{width:'4cm'}}>Sign up</button><br/></center>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;