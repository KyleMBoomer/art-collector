import React from 'react'
import '../CSS/Footer.css'
import github from '../Images/github-icon.png'
import linkedin from '../Images/linkedin-icon.png'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p className='created-by'>Created by:</p>
            <div className='info-section'>
                <h2 className='name'>Jordan Williamson</h2>
                    <img className='github' src={github} alt='github-logo'/>
                    <a href='https://github.com/JWill06' className='jordan-github'>@GitHub</a>
                <h2 className='name'>Kim Ewing</h2>
                    <img className='github' src={github} alt='github-logo'/>
                    <a href= 'https://github.com/kiewi16' className='kim-github'>@GitHub</a>
                <h2 className='name'>Kyle Boomer</h2>
                    <img className='github' src={github} alt='github-logo'/>
                    <a href='https://github.com/kylemboomer' className='kyle-github'>@GitHub</a>
                <h2 className='name'>Seong Kang</h2>
                    <img className='github' src={github} alt='github-logo'/>
                    <a href='https://github.com/Sanghoro' className='seong-github'>@GitHub</a>
            </div>
        </footer>
    )
}

export default Footer