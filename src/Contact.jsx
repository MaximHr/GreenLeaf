import React, {useState} from 'react';
import forrest from './assets/forrest.jpg'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState(false);

  const submitHandler = () => {
    if(name.trim() != '' && email.trim() != '' && message.trim() != '') {
      setPopup('Message submited !');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setPopup('Please fill out the form');
    }
  }
  return (
    <div className="contact-page">
      <div className='contact-card'>
        <h1>Contact us</h1>
        {
          popup == 'Message submited !' ? <p className="greenp">{popup}</p> : popup == 'Please fill out the form' ? <p className="redp">{popup}</p> : <></>
        }
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message'></textarea>
        <button onClick={submitHandler} className="btn green">Send a message</button>
      </div>
      <img src={forrest} alt="forrest" />
    </div>
  )
}

export default Contact;