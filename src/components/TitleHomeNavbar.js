import React, { Component } from 'react'

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
                <a href="https://fr-fr.facebook.com" target="_blank noopener noreferrer"><img className="rsNavbar" src={fbWhite} alt={fbWhite}></img></a>
            </div>
            <div>
                <a href="https://www.instagram.com/?hl=fr" target="_blank noopener noreferrer"><img className="rsNavbar" src={instaWhite} alt={instaWhite}></img></a>
            </div>
            <div>
                <a href="https://www.youtube.com/" target="_blank noopener noreferrer"><img className="rsNavbar" src={YoutubeWhite} alt={YoutubeWhite}></img></a>
            </div>
            <div>
            <a href="https://fr-fr.facebook.com" target="_blank noopener noreferrer"><img className="rsNavbar" src={share} alt={share}></img></a>
            </div>
        </div>   
        </>
        )
    }
}

export default TitleHomeNavbar