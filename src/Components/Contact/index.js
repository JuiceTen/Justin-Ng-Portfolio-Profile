import React, {useEffect, useRef} from 'react'
import './contact.css'
import GitHubButton from 'react-github-btn'
import instagramButton from '../images/instagram-button.jpg'
import Nav from '../Nav'
import { motion } from 'framer-motion'
import axios from 'axios'
import Realm from 'realm'

function Contact() {
    const modal = useRef()

    // const app = new Realm.App({id: 'application-1-uyftd'})
    // const cred = Realm.Credentials.anonymous();

    // const emailSchema = {
    //     name: 'Email',
    //     properties: {
    //         _id: "objectID",
    //         name: 'string',
    //         email: 'string',
    //         message: 'string',
    //         subject: 'string'
    //     },
    //     primaryKey: '_id'
    // }
    // const realm = Realm.open({
    //     schema: [emailSchema],
    //     sync: {
    //         user: app.currentUser
    //     }
    // })

    

    // useEffect(() => {
    //     try {
    //         const user = await app.logIn(cred);
    //     } catch (err) {
    //         console.log('failed to login')
    //     }
    // })

    const sendEmail = () => {
        const emailName = 'ng.justin07'
        const platform = 'gmail.com'
        const mailAction = document.getElementById('emailForm')
        mailAction.setAttribute('action', `mailto:${emailName}@${platform}`)
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

    // const emailPost = async () => {
    //     const email = document.querySelector('#email').value
    //     const name = document.querySelector('#name').value
    //     const message = document.querySelector('#content').value
    //     const subject = `Email from profile page by ${name}`
    
    //     realm.write(() =>{
    //         realm.create('Email', {
    //             name,
    //             message,
    //             email,
    //             subject
    //         })
    //     })
    //     if (response.ok) {
    //         console.log('email sent')
    //     }
    // }
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
                        <form id='emailForm'
                        method='POST'
                        >
                            <label>Name</label>
                            <input className='name' id='name' type='text' name='name'/>
                            <label>Email</label>                    
                            <input className='email' id='email' type='email' name='email' required='true'/>
                            <label>Content</label>
                            <textarea id='content' className='content' type='text' wrap='true' name='content'>

                            </textarea>
                            
                            <div className='buttonContainer'>
                            <button className='send' value='submit' onSubmit={sendEmail}>Send</button>
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