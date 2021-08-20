import React from 'react';
import Profile from '../images/profilePic.jpg'
import './about.css'
import {motion} from 'framer-motion'
import Nav from '../Nav';

function About() {

    return(
        <motion.div className='background' initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 1}}>
        <section id="about-me" className="hide borders" data-router-wrapper>
            <Nav />
                <div className="contactwrap" data-router-view='about'>
                   <aside>
                    <h2>About Me</h2>
                    </aside>
                    
                    <p>
                    <img src={Profile} alt="Me" />
                    
                    I am an environmental justice advocate for sustainabile technologies. I wish to combat global climate change and through information technologies as it is an important skill to reach a more global platform. Enviornmental agencies, federal, non-profit, and for-profit, are lacking behind in terms of information services and web/app development. In order to help field researches and other enviornmental scientists reach a wider audience and increase their working efficiency, my goal is to design apps/websites that meet the need for this ever expanding demand.
                    </p>
                </div>
            </section>
            </motion.div>
    )
}

export default About;