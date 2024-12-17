import './portfolio.css'

import photo1 from "./img/1.png"
import photo2 from "./img/2.png"
import photo3 from "./img/3.png"


export default function Portfolio() {
    return (
        <section className="portfolio">
        <div className="container">
            <div className="portfolio-title">
                <h2 className="title1">
                    Portfolio
                </h2>
            </div>


            <div className="project" data-aos="flip-up">
                <img src={photo1} alt="" className="project-img"/>
                <h3 className="project-title"><a href="#!">Online fashion store - Homepage</a></h3>
            </div>
            <div className="project" data-aos="flip-up">
                <img src={photo2} alt="" className="project-img"/>
                <h3 className="project-title"><a href="#!">Reebok Store - Concept</a></h3>
            </div>
            <div className="project" data-aos="flip-up">
                <img src={photo3} alt="" className="project-img"/>
                <h3 className="project-title"><a href="#!">Braun Landing Page - Concept</a></h3>
            </div>
        </div>
    </section>
    )
}