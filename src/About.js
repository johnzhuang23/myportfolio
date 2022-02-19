import React from 'react'
import "./About.css"
import { Icon } from '@iconify/react';



export const About = () => {
    return (
        <div id="about">
            <h1 className="section-title">About me</h1>
            <div className="about-container">
                <div className="about-image"><img src="" alt="" />
                </div>
                <div className="about-text">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel nam voluptate reiciendis, repellendus ipsum aut, quaerat iste quibusdam perferendis omnis accusantium quos soluta reprehenderit animi corporis unde autem numquam. Pariatur voluptatum illo molestiae fuga obcaecati ea quis culpa hic eos ad rerum impedit asperiores eum, temporibus numquam ipsum quos repellat at nobis vel animi libero inventore mollitia. A, doloremque.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel nam voluptate reiciendis, repellendus ipsum aut, quaerat iste quibusdam perferendis omnis accusantium quos soluta reprehenderit animi corporis unde autem numquam. Pariatur voluptatum illo molestiae fuga obcaecati ea quis culpa hic eos ad rerum impedit asperiores eum, temporibus numquam ipsum quos repellat at nobis vel animi libero inventore mollitia. A, doloremque.</p>
                    <p>Read my resume <a href="../public/zz-resume.pdf">here</a>.</p>

                </div>
            </div>
        </div>
    )
}

export default About