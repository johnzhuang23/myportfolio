import React from 'react'
import "./About.css"
import { Icon } from '@iconify/react';



export const About = () => {
    return (
        <div id="about">

            <h1 className="section-title">About me</h1>
            <div className="about-container">
                <div className="about-image"><img src="/zz-1.jpg" alt="" />
                </div>
                <div className="about-text">
                    <p> Hello, I am John, my friends call me ZZ. I am a junior Web Developer based in Adelaide. I recently completed the 12-week Softeware Emngineering Immersive Course at General Assembly.</p>
                    <p> Last year, I made a decision to change my career path and committed myself into this three-month intensive course. It never be an easy journey, but fortunately, I found my passion in software developement. I enjoyed the peace in coding and the excitment in learning new things every day. Now I am available for full time employment and open to remote jobs. Feel free to reach out and say hello:) <br />
                        <br />
                        Read my resume <a href="/zz-resume.pdf" target="_blank">here</a>.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default About