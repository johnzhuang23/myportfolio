import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'

function Card({ image, title, desc, demolink, codelink }) {
    const [show, setShown] = useState(false);

    const props3 = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
            ? "0 20px 25px rgb(0 0 0 / 25%)"
            : "0 2px 10px rgb(0 0 0 / 8%)"
    });
    return (
        <animated.div
            className="card"
            style={props3}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
        >
            <img src={image} />

            <h1>{title}</h1>
            <p>{desc}</p>
            <div className="card btnn">
                <button className="btn">
                    <a href={demolink} target="_blank">Demo</a>
                </button>

                <button className="btn">
                    <a href={codelink} target="_blank">Code</a>
                </button>
            </div>
        </animated.div>
    );
}

export default Card;
