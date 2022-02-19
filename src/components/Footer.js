import React from 'react'
import "./Footer.css"


export const Footer = () => {
    return (
        // <div id="footer">Copyright &copy; John Zhuang</div>
        <div className="footer-link" id="footer">
            <a href="#header">Back to Top</a>
            <a href="mailto:johnzhuang.work@gmail.com">Contact me</a>
        </div>
    )
}

export default Footer;