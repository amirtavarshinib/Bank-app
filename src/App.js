import './App.css';
import LoginPage from './components/Login';
import SignIn from './components/sign';
import { useState } from 'react';
function App() {
  const [currentForm,setCurrentForm]=useState('login');

  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm==="login" ? <LoginPage onFormSwitch={toggleForm}/>:<SignIn onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
