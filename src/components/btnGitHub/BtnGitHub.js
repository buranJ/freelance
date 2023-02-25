import React from 'react'
import './style.css'
import githubicon from './gitHub-black.svg'
const BtnGitHub = ({ link }) => {
    return (
        <a href={link} target="_blank"
            className="btn-outline" rel="noreferrer">
            <img src={githubicon} alt="" />
            GitHub repo
        </a>
    )
}

export default BtnGitHub