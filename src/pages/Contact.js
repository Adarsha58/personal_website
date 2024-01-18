// Contact.js
import React, { useState } from 'react';
import usePost from '../utils/usePost'; // Import your custom hook
import '../styles/Contact.css'; // Import your CSS file

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const {data, error, isLoading, postData } = usePost('http://localhost:5001/send-email/');

    console.log('status: ',  status)

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!name || !email || !message) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        // Trigger API request
        await postData({ name, email, message });

        // Display status
        if (error) {
            setStatus({ type: 'error', message: 'Sending failed.' });
        } else {
            setStatus({ type: 'success', message: 'Sucessfully mailed.' });
        }
    };

    return (
        <div className='contact-container' id='contact'>
            <span>LET'S TALK</span>

            <form className='form-container' onSubmit={handleSubmit}>
                <div className='info-row'>
                    <div className='name-box'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='address-box'>
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className='paragraph'>
                    {!message && <div className='default-text'>What's up?</div>}
                    <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>

                <button type='submit' disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'SEND'}
                </button>
            </form>

            {status && (
                <div className={`status-popup ${status.type}`}>
                    <div className='popup-msg'>{status.message}</div>
                    <div className='popup-closer'>
                        <img
                            src="https://assets-global.website-files.com/5b54e064ef1d588c6d4a4264/62642abf5db7f5d0e68a9966_plus.svg"
                            loading="lazy"
                            onClick={() => setStatus(null)}
                            className='close-popup'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
