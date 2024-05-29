import React from 'react'
import "./home.css"
const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/sehmus.eroll/" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="https://github.com/ShmsErl" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/seyhmus-erol/" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href="https://medium.com/@erol.sehmus1" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-medium'></i>
            </a>
            <a href="https://www.instagram.com/sehmus.eroll/" className="home__social-link" target='_blank'>
                <i className='fa-brands fa-twitter'></i>
            </a>
        </div>
    )
}

export default HeaderSocials