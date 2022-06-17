import React from 'react';
import "../styles/Contact.css"
import photo from '../assets/south.jpg'

function Contact() {
    return ( 
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${photo})`}}></div>
        <div className='rightSide'>
            <h1>contact us</h1>
            <form id='contact-form' method="post">
                <label htmlFor='name'>Full Name</label>
                <input name = 'name' type='text' placeholder='Enter your name' />
                <label htmlFor='name'>Full Name</label>
                <input name = 'name' type='email' placeholder='Enter your email address' />
                <label htmlFor='message'>Message</label>
                <textarea name='message' placeholder='enter your message' rows="7"></textarea>
                <button type="submit">send Message</button>

            </form>

        </div>


    </div> );
}

export default Contact;