import React from 'react'
import { Icon } from '@iconify/react';
import './Skills.css'

export const Skills = () => {

    return (

        <div id="skills">
            <h1 className="section-title">Skills</h1>

            <div className="skill-icon">
                <div className="skills-tile">
                    <Icon icon="cib:html5" />
                    <p style={{ fontSize: "14px" }}>HTML 5</p>
                </div>
                <div className="skills-tile">
                    <Icon icon="cib:css3" />
                    <p style={{ fontSize: "14px" }}>CSS</p>
                </div>
                <div className="skills-tile">
                    <Icon icon="cib:javascript" />
                    <p style={{ fontSize: "14px" }}>JavaScript</p>
                </div>
                <div className="skills-tile">
                    <Icon icon="cib:react" />
                    <p style={{ fontSize: "14px" }}>React</p>
                </div>
            </div>
            <div className="skill-icon">
                <div className="skills-tile">
                    <Icon icon="mdi:nodejs" />
                    <p style={{ fontSize: "14px" }}>Node.js</p>
                </div>
                <div className="skills-tile">
                    <Icon icon="cib:ruby" />
                    <p style={{ fontSize: "14px" }}>Ruby</p>
                </div>
                <div className="skills-tile">
                    <Icon icon="file-icons:sinatra" />
                    <p style={{ fontSize: "14px" }}>Sinatra</p>
                </div>
                <div className="skills-tile">
                    <Icon icon="cib:postgresql" />
                    <p style={{ fontSize: "14px" }}>PostgreSQL</p>
                </div>
            </div>
        </div>

    )
}
// export const Skills = () => {

//     return (

//         <div id="skills">
//             <h1 className="section-title">Skills</h1>

//             <div className="skill-icon">
//                 <div className="skills-tile">
//                     <Icon icon="cib:html5" />
//                     <p style={{ fontSize: "14px" }}>HTML 5</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="cib:css3" />
//                     <p style={{ fontSize: "14px" }}>CSS</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="cib:javascript" />
//                     <p style={{ fontSize: "14px" }}>JavaScript</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="cib:react" />
//                     <p style={{ fontSize: "14px" }}>React</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="cib:ruby" />
//                     <p style={{ fontSize: "14px" }}>Ruby</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="cib:postgresql" />
//                     <p style={{ fontSize: "14px" }}>PostgreSQL</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="mdi:nodejs" />
//                     <p style={{ fontSize: "14px" }}>Node.js</p>
//                 </div>
//                 <div className="skills-tile">
//                     <Icon icon="file-icons:sinatra" />
//                     <p style={{ fontSize: "14px" }}>Sinatra</p>
//                 </div>
//             </div>
//         </div >

//     )
// }


export default Skills;