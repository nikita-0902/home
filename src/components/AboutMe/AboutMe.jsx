import React from 'react';

import aboutme from '../../images/aboutme.jpg';
import './AboutMe.css';



function AboutMe() {
    return (
        <div className="About__me">
            <div className="main__title">
                About <span className="me">Me</span>
                <div className="text__title">
                    Get to Know <span className="me">me.</span>
                </div>
            </div>
            <div className="all__info">
                 <div className="main__img">
                    <img className="aboutmeimg" src={aboutme} alt="" />
                </div> 
                <div className="main__text">
                    I'm creative <span className="web">web developer</span> based in Kharkiv, UA.
                    <div className="text__">
                        I'm student and Now I have been studying at the Semyon Kuznets Kharkiv National Economic University. I'm in my third year of a degree in Software Engineering, very motivated and quick to learn.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;
