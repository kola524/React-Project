import './header.css'
import hero from'./img/hero/hero.png'
import herom from './img/hero/hero mobile.png'

export default function Header() {
    return (
        <header className="header">
        <div className="container">
            
            <div className="header-nav">
                <a href="#!" className="logo">
                    Nikolai
                </a>
                <nav id="nav" className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#!" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <button id="nav-btn" className="nav-button">
                        <img id="nav-btn-img" src="./images/nav/open.svg" alt="" />
                    </button>
                </nav>
            </div>

           
            

            <div className="header-row">
                <div className="header-content" data-aos="fade-up">
                    <h1 className="header-heading">
                        Nikolai Bailyyev<br/> <span>Designer & Developer</span>
                    </h1>
                    <p>
                        I’m a portrait, fashion and lifestyle photographer living In New York City. During my thirteen year tenure here.
                    </p>

                </div>
                <div className="header-img" data-aos="fade-left">


                    <picture>
                        <source media="(max-width: 799px)" srcset={herom} />
                        <img src={hero} alt="" />
                    </picture>





                </div>
            </div>
        </div>
    </header>

    )
}