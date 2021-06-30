import React from 'react'
import './contact.css'
import GitHubButton from 'react-github-btn'
import instagramButton from '../images/instagram-button.jpg'

function Contact() {

    return(
        <div id='background'>
        <section id="contacts" >
                <div className="contactwrap">
                    <aside>
                        <h2>Contacts</h2>
                    </aside>
                    <br/>
                    <br/>
                
                    <ul>
 
                        <li>
                            <button className='round'><a href="mailto:ng.justin07@gmail.com">📧</a></button>
                        </li>

                        <li>
                            Phone: 347-241-1361
                        </li>

                        <li>
                            <button className='round'><a href="instagram.com/jus10ng"><img src = {instagramButton} alt='instagram logo'/></a></button>
                        </li>

                        <li>
                        
                        <GitHubButton href="https://github.com/juiceten" aria-label="Follow @juiceten on GitHub">Follow @juiceten</GitHubButton>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
    )
}

export default Contact;