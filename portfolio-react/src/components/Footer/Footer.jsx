function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section contact-info">
                    <h3>Rand Dabbour | Web Developer</h3>
                    <p>Email: <a href="mailto:rand@example.com">randdabbourr@gmail.com</a></p>
                </div>
                <div className="footer-section social-media">
                    <h3>Follow Me</h3>
                    <a href="https://www.linkedin.com/in/rand-dabbour-15429427a/" target="_blank">LinkedIn</a> |
                    <a href="https://github.com/RandDabbour" target="_blank">GitHub</a>
                </div>
                <div className="footer-section navigation-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#highlight">Highlight</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
