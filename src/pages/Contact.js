import '../Contact.css'

const Contact = () => {

    const submit = (e) => {
        console.log(e);
    }

    return (
        <div className="contact-page-wrapper">
            <div className="contact-form-wrapper">
                <div className="left-input">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                </div>
                <div className="right-input">
                    <textarea rows="6" cols="30" placeholder="Message (if any)" />
                </div>
            </div>
            <button className="submit-button" onClick={submit}>Submit</button>
        </div>
    );
}

export default Contact;