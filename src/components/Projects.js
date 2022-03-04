import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import "./Projects.css"

function Projects() {
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card
                    image="/tic-tac-toe.png"
                    title="Tic-Tac-Toe"
                    desc="My first project. Vanilla JavaScript, HTML and CSS."
                    demolink="https://pages.git.generalassemb.ly/johnzz/tic-tac-toe/"
                    codelink="https://github.com/johnzhuang23/tic-tac-toe" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="/ozservo.png"
                    title="OZ Servo"
                    desc="Using government public data and Google Map API to mark and sort all servos across Australia. Node.js, Google Map API, PostgreSQL are used."
                    demolink="https://ozservo-zz.herokuapp.com/"
                    codelink="https://github.com/johnzhuang23/ozservo" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="/ruby.png"
                    title="Moments on Ruby"
                    desc=" Inspired by social media platforms. It has some very basic social features. Ruby, Sinatra, and PostgreSQL."
                    demolink="https://moments-ruby.herokuapp.com/"
                    codelink="https://github.com/johnzhuang23/moments" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="/desshert.png"
                    title="Des Shert"
                    desc="Customise a T-shirt with you own words, paintings and stickers! React and React-Konva are used."
                    demolink="https://desshert.surge.sh/"
                    codelink="https://github.com/johnzhuang23/deshert" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="/portfolio2.jpeg"
                    title="My Portfolio"
                    desc="A Responsive web app about me and my projects:) A React single-page application."
                    demolink="https://zz-portfolio.surge.sh/"
                    codelink="https://github.com/johnzhuang23/myportfolio" />
            )
        }
    ];
    return (
        <div className="" id="projects">
            <h1 className="section-title">Projects</h1>
            <Carousel
                cards={cards}
                height="650px"
                width="80%"
                margin="0 auto"
                offset={2}
                showArrows={false}
            />
        </div>
    );
}

export default Projects
