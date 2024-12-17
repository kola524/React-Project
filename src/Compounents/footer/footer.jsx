
import './footer.css'
import photo1 from './img/LinkedIn.svg'
import photo2 from './img/instagram.svg'
import photo3 from './img/Behance.svg'
import photo4 from './img/Dribble.svg'

export default function Footer() {
    return ( 
        <footer className="contacs">
        <div className="container">
            <div className="contacs-title">
                <h2 className="title1">
                    Contacts
                </h2>

            </div>
            <div className="contacts-content" data-aos="fade-down">
                <p>Want to know more or just chat?<br/> You are welcome!</p>
            </div>
            <div className="contacts-button">
                <a href="#!" className="btn" data-aos="fade-down">Send message</a>
            </div>
            <div className="contacs-sochial" data-aos="zoom-in">
                <a href="#!"><img src={photo1} alt="LinkedIn"/></a>
                <a href="#!"><img src={photo2} alt="instagram"/></a>
                <a href="#!"><img src={photo3} alt="Behance"/></a>
                <a href="#!"><img src={photo4} alt="Dribble"/></a>
            </div>

            <div className="contacs-footer" data-aos="fade-up">
                <p>Like me on<br/> LinkedIn, Instagram, Behance, Dribble</p>
            </div>
        </div>
    </footer>
    )
}
