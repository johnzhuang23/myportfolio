import React from 'react'
import Typical from './Typical.js'
import { Icon } from '@iconify/react';
import './Header.css'

export default function Header() {


    return (
        <div id="header">
            <Icon icon="mdi:robot-excited-outline" style={{ fontSize: '120px' }} color="#ef632b" />
            <h1>
                <Typical
                    className="title-styles"
                    steps={['Hello:)', 1200, `I'm John.`, 1500]}
                    loop={Infinity}
                    wrapper="p"
                />
            </h1>
            <div className="header-link">
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="header-icon">


                <a href="https://github.com/johnzhuang23" target="_blank">
                    <Icon icon="jam:github" style={{ fontSize: '50px' }} inline={true} />
                </a>

                <a href="https://www.linkedin.com/in/johnzhuang23/" target="_blank">
                    <Icon icon="jam:linkedin-square" style={{ fontSize: '50px' }} inline={true} />
                </a>

                <a href="https://raw.githubusercontent.com/johnzhuang23/myportfolio/master/public/zz-resume.pdf" title="resume">
                    <Icon icon="fa:file-text-o" style={{ fontSize: '42px' }} inline={true} />
                </a>
                <a href="mailto:johnzhuang.work@gmail.com" >
                    <Icon icon="mdi:email" style={{ fontSize: '50px' }} inline={true} />
                </a>

            </div>
        </div>

    )
}


