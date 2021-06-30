import React from 'react';
import Profile from '../images/57972730_351274962260387_3988276622542810488_n.jpg'
import './about.css'

function About() {

    return(
        <div id='background'>
        <section id="about-me" className="hide">
                <div className="contactwrap">
                   <aside>
                    <h2>About Me</h2>
                    </aside>
                    
                    <p>
                    <img src={Profile} alt="Me" />
                    
                    I am an environmental justice advocate for sustainabile technologies. I wish to combat global climate change and through information technologies as it is an important skill to reach a more global platform. Enviornmental agencies, federal, non-profit, and for-profit, are lacking behind in terms of information services and web/app development. In order to help field researches and other enviornmental scientists reach a wider audience and increase their working efficiency, my goal is to design apps/websites that meet the need for this ever expanding demand.
                    </p>
                </div>
            </section>
            </div>
    )
}

export default About;