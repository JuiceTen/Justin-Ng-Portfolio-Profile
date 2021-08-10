import React from 'react';
import resumePhoto from '../images/resume_photo.PNG'
import './resume.css'
import resumePDF from '../images/Justin-Ng.pdf'
function Resume() {


    function pdfDownload() {
        fetch(resumePDF)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = 'Justin-Ng-Resume.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            console.log('your file has downloaded!');
        })
        .catch(() => console.log('oh no!'));
        }



    return(
        <div id='background'>
        <section id="resume" className="hide">
                <div className="contactwrap">
                    <aside>
                        <h2>Resume</h2>
                    </aside>
                    <br/>
                    <br/>

                    
                    <div className="btnCont">
                    

                    <img id="resumePhoto" src={resumePhoto} alt="resume " data-bs-target="#staticBackdrop" data-bs-toggle="modal"/>

  
                    </div>
               
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content modalBox">
                            <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Resume</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <img id="modalCont" src={resumePhoto} alt = "resume"/>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary"><a href={resumePhoto} target="_blank" rel='noreferrer' id='view'>View</a></button>
                            <button type="button" className="btn btn-primary" id='download' onClick={pdfDownload}> Download </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </section>
            </div>
    )
}

export default Resume;