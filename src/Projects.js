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
                    image="https://picsum.photos/seed/picsum/400/300"
                    title="JavaScript"
                    desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat."
                    demolink="http://www.google.com"
                    codelink="#" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="https://picsum.photos/1200/900"
                    title="Ruby"
                    desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit minus atque eveniet deleniti eos, facere aspernatur placeat dolorem culpa est nesciunt hic voluptatem ullam cumque odit cupiditate voluptatum! Eum, inventore?"
                    demolink="#"
                    codelink="#" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="https://picsum.photos/400/300?grayscale"
                    title="Node.js"
                    desc="Aut suscipit vel consequuntur odio culpa deleniti earum natus, explicabo qui iste ea officiis, dicta dolore nemo perferendis quasi minima exercitationem? Laboriosam porro deserunt repellat, iusto sequi pariatur ratione incidunt."
                    demolink="#"
                    codelink="#" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="https://picsum.photos/400/300?blur"
                    title="React"
                    desc="Laborum ea, recusandae autem illum eveniet minima facilis maiores minus at sint temporibus in debitis voluptatibus maxime quasi id perferendis.Vitae dicta quos suscipit aliquam quisquam ad non perferendis dolores."
                    demolink="#"
                    codelink="#" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card
                    image="https://picsum.photos/id/1003/400/300"
                    title="PSQL"
                    desc=" Deleniti quo quas quibusdam sit doloribus tempore dolorem veritatis atque distinctio sapiente asperiores placeat consequuntur molestias ipsam pariatur consectetur magni ea enim sunt odio, maiores doloremque illum magnam tenetur.Placeat."
                    demolink="#"
                    codelink="#" />
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
