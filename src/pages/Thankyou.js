import React, { useEffect, useState } from 'react';
import '../styles/ThankYou.css'; // Import your CSS file

const ThankYou = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the fade-in animation after the component mounts
        setFadeIn(true);
    }, []);

    return (
        <div className={`thank-you ${fadeIn ? 'fade-in' : ''}`}>
            <p className='thank-you-message'>Thank you for visiting! 🌟</p>
        </div>
    );
};

export default ThankYou;
