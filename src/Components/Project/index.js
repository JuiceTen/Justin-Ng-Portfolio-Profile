import React from 'react';
import Pokemon from '../images/poketeamslogo.png'
import Default from '../images/drawings.jpg'
import Nav from '../Nav/index'
import './project.css';
import {motion} from 'framer-motion'

function Project() {

    return (
        <motion.div className='background' 
        initial={{scaleY: 0}}    
        animate={{scaleY: 1 }} 
        exit={{scaleY: 0}}
        transition={{duration: 1}}>

            <section id="projects" className="hide borders" data-view-wrapper>
                    <div className="contactwrap" data-view-router='project'>
                        <aside>
                            <h2>Projects</h2>
                        </aside>
                        <div id="row-1">
                            <div className="photo-1">
                                <a href="https://github.com/JuiceTen/Pokemon-Battle-Theme" target="_blank" rel="noreferrer">
                                    <div className="layer">
                                        <span data-descr="PokeTeams"><img className="project-1" src={Pokemon} alt="animal drawings"/></span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div id="row-2" >
                            <div className="photo-2">
                                <a href="https://github.com/JuiceTen?tab=repositories" target="_blank" rel='noreferrer'>
                                    <div className="layer">
                                        <span data-descr="Project 2"><img className="project-2" src={Default} alt='project2'/></span>
                                    </div>
                                </a>
                            </div>

                            <div className="photo-3">
                                <a href="https://github.com/JuiceTen?tab=repositories" target="_blank" rel='noreferrer'>
                                    <div className="layer">
                                        <span data-descr="Project 3"><img className="project-3" src={Default} alt='project3'/></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Nav />
                </section>
                </motion.div>
    )
}

export default Project;