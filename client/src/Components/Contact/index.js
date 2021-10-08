import React, {useEffect, useRef, useState} from 'react'
import './contact.css'
import GitHubButton from 'react-github-btn'
import instagramButton from '../images/instagram-button.jpg'
import Nav from '../Nav'
import { motion } from 'framer-motion'
import axios from 'axios'


function Contact() {

    const modal = useRef()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage]= useState('')

    const sendEmail = async (e) => {
        e.preventDefault();

       if(email && name && message) {
            const response = await fetch('/email', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },

                body: JSON.stringify({
                    email: email,
                    name: name,
                    message: message
                })
                
            })
            const res= response


            if (response.ok) {
                console.log(res)
                // document.location.replace('/contact')
                
            } else {
                console.log('error')
            }
        }
    }

    const animateFadeOut = () => {
        modal.current.style.animation = 'fade-out 500ms ease-in-out'
    }
    
    const showModal = () => {
        modal.current.setAttribute('style', 'display: block')
        modal.current.style.animation = 'fade 500ms ease-in-out'
    };
    const hideModal = () =>{
        animateFadeOut()
        setTimeout(function () {
            modal.current.setAttribute('style' , 'display: none');
            document.getElementById('content').value = ''
        },400)

    }

    window.onclick = (event) => {
        const myModal = document.getElementById('myModal')
        if(event.target === myModal) {
            hideModal()
        }
    }

    
    return(
        <motion.div className='background' initial={{opacity: 0, scaleY: 0}} animate={{opacity: 1, scaleY: 1}} exit={{opacity: 0, scaleY: 0}} transition={{duration: 1}}>
        <section id="contacts" className='borders' data-view-wrapper>
        <Nav />

                <div className="contactwrap" data-view-router='contact'>
                    <aside>
                        <h2>Contacts</h2>
                    </aside>
                    <br/>
                    <br/>

                    <div ref={modal} id='myModal' className='myModal'>
                        <div id='modalContent' className='modalContent'>
                        <h2>Contact Me <span className='close' onClick={hideModal}>x</span></h2>
                        <br/>
                        <form id='emailForm' onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className='name' id='name' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <label>Email</label>                    
                            <input className='email' id='email' type='email' name='email' value={email} required='true'  onChange={(e) => setEmail(e.target.value)}/>
                            <label>Content</label>
                            <textarea id='content' className='content' type='text' wrap='true' name='message' value={message}  onChange={(e) => setMessage(e.target.value)}>

                            </textarea>
                            
                            <div className='buttonContainer'>
                            <button className='send' value='submit' onClick={hideModal}>Send</button>
                            </div>
                       </form>
                       </div>
                    </div>
                
                    <ul>
 
                        <li>
                            <button className='round' onClick={showModal}>Contact Me</button>
                        </li>

                        <li>
                            Phone: 347-241-1361
                        </li>

                        <li>
                            <button className='round'><a href="https://instagram.com/jus10ng" target='_blank' rel='noreferrer'><img src = {instagramButton} alt='instagram logo'/></a></button>
                        </li>

                        <li>
                        
                        <GitHubButton href="https://github.com/juiceten" aria-label="Follow @juiceten on GitHub">Follow @juiceten</GitHubButton>
                        </li>
                    </ul>
                </div>
            </section>
            </motion.div>
    )
}

export default Contact;