import './cards.css'
import card1 from "./img/01.svg"
import card2 from "./img/02.svg"
import card3 from "./img/03.svg"

export default function Cards() {
    return (
        <section className="services">
        <div className="container">
            <div className="services-row">
                <div className="services-card"  data-aos="fade-down">
                    <img  className="services-card-img"  src={card1} alt="UI/UX Design"/>
                    <h3 className="services-card-title">UI/UX Design</h3>
                    <p>
                        Our design is translated into comprehensive digital environments built on latest development standards.
                    </p>
                </div>
                <div className="services-card"  data-aos="fade-down">
                    <img  className="services-card-img"  src={card2} alt="UI/UX Design"/>
                    <h3 className="services-card-title">Development</h3>
                    <p>
                        Our design is translated into comprehensive digital environments built on latest development standards.
                    </p>
                </div>
                <div className="services-card"  data-aos="fade-down">
                    <img  className="services-card-img"  src={card3} alt="UI/UX Design"/>
                    <h3 className="services-card-title">software testing</h3>
                    <p>
                        Our design is translated into comprehensive digital environments built on latest development standards.
                    </p>
                </div>
            </div>
        </div>
    </section>

    )
}