import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const signInHandler = () => {
    if(email.trim() != '') {
      setError('The email could not be send.');
    } else {
      setError('Please fill out the form.')
    }
  }
  return (
    <div className='signup'>
      <div className="wrapper">
        <h1>Get started with GreenLeaf</h1>
        {
          !error ? <></> : <p className="alert error">{error}</p>
        }
        <input 
          type="text" 
          placeholder='Work Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn green" onClick={signInHandler}>Continue</button>
        <p>Already have an account? <Link to='/signin'>Sign in</Link></p>
      </div>
    </div>
  )
}

export default SignUp;