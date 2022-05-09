import React, { useEffect, useRef } from 'react';
import './About.css'

const About = () => {
    const aboutRef:React.MutableRefObject<any>= useRef(null)

    useEffect(() => {
        executeScroll();
    }, [])
    
    const executeScroll = () => aboutRef.current.scrollIntoView();

    return (
        <>
            <section ref={aboutRef} className='about'>
                <div className='main'>
                    {/* <img src="https://onlineedubd.com/wp-content/uploads/2021/01/study-in-UK-without-IELTS.jpg" alt="" /> */}
                    <div className="row">
                        <div className='about-text'>
                            <h1 className='text-light text-center mb-3'>About us</h1>
                            <p>IELTS usually all of the sentences in the same paragraph should stay with the same idea. If this is a challenge, if you have problems organising your thoughts you may want to look at the website our expert trained in IELTS
                                <br />
                                <br />
                                At the exam, you can make a list of ideas, have a look at it and give each point a number in order of importance. Above all, your points should follow a logical order.
                            </p>
                        </div>
                        <div className='about-gallery'>
                            <img src="https://www.smu.ca/webfiles/IELTSBanner-762x380.png" alt="" />
                            <img src="https://www.britishcouncil.ca/sites/default/files/ielts-registration-paper-based_0.jpg" alt="" />
                            <img src="https://britishielts.in/blog/wp-content/uploads/2016/02/ielts-coaaching-in-chandigarh.jpg" alt="" />
                            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/09/23164817/IELTS.jpg" alt="" />
                            <img src="https://thumbs.dreamstime.com/b/ielts-word-written-black-letters-yellow-paper-notes-words-note-pen-embedded-background-blue-diary-201468806.jpg" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_Z8OCKebLU4hprAFwbs_k-HwIjUEPPUMMWUZgKScUX8j_6bu0TRfAYhdrp2Ru7HyPyI&usqp=CAU" alt="" />
                        </div>
                        {/* <button className="about-button">Learn More</button> */}
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
