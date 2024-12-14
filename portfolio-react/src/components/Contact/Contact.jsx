function Contact() {
    return (
        <div className="contact-me" id="contact">
            <form className="Contact-form">
                <input type="text" id="name" placeholder="Full name" />
                <input type="email" id="emaol" placeholder="E-mail" />
                <textarea placeholder="Message" id="message" name="message" rows="4" cols="50"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
