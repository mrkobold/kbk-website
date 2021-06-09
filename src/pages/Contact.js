import { useState } from 'react';
import '../css/Contact.css'

const Contact = () => {

    const submit = (e) => {
        console.log("Submit pressed \n name=" + name + ", email=" + email + ", message=" + message);
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className="contact-page-wrapper">
            <div className="contact-form-wrapper">
                <div className="left-input">
                    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                    <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="right-input">
                    <textarea rows="6" cols="30" placeholder="Message (if any)" value={message} onChange={handleMessageChange} />
                </div>
            </div>
            <button className="submit-button" onClick={submit}>Submit</button>
        </div>
    );
}

export default Contact;