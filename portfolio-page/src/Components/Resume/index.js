import React from 'react';
import resumePhoto from '../images/resume_photo.PNG'

function Resume() {

    return(
        <section id="resume" class="hide">
                <div class="contactwrap">
                    <aside>
                        <h2>Resume</h2>
                    </aside>
                    <br/>
                    <br/>

                    
                    <div class="btnCont">
                    

                    <img id="resumePhoto" src={resumePhoto} alt="resume " data-bs-target="#staticBackdrop" data-bs-toggle="modal"/>

  
                    </div>
               
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content modalBox">
                            <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Resume</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                                <img id="modalCont" src={resumePhoto} alt = "resume"/>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-primary"><a href={resumePhoto} target="_blank" rel='noreferrer'>View</a></button>
                            <button type="button" class="btn btn-primary" id='download'> Download </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
    )
}

export default Resume;