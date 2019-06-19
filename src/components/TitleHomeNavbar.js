import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './TitleHomeNavbar.scss'
import fbWhite from '../Images-tripitto/Icon/social/fb_white.png'
import instaWhite from '../Images-tripitto/Icon/social/insta_white.png'
import YoutubeWhite from '../Images-tripitto/Icon/social/youtube_white.png'
import share from '../Images-tripitto/Icon/social/share.png'

class TitleHomeNavbar extends Component {
    render () {
        return (
        <>
        <div className="containerTitleHomeNavbar">
            <div>
                <h1>PROJETEZ-VOUS DANS VOTRE PROCHAINE DESTINATION</h1>
            </div>
            <div>
                <NavLink exact to="/"><img className="rsNavbar" src={fbWhite} alt={fbWhite}></img></NavLink>
            </div>
            <div>
            <NavLink exact to="/"><img className="rsNavbar" src={instaWhite} alt={instaWhite}></img></NavLink>
            </div>
            <div>
            <NavLink exact to="/"><img className="rsNavbar" src={YoutubeWhite} alt={YoutubeWhite}></img></NavLink>
            </div>
            <div>
            <NavLink exact to="/"><img className="rsNavbar" src={share} alt={share}></img></NavLink>
            </div>
        </div>   
        </>
        )
    }
}

export default TitleHomeNavbar