import React, { Component } from 'react';
import axios from 'axios'
// import YouTube from 'react-youtube';
import './HomeComponentsPart3.scss'

import leftHome from '../../Images-tripitto/Icon/leftHome.png'
import RightHome from '../../Images-tripitto/Icon/RightHome.png'
import normal from '../../Images-tripitto/Icon/Voyage/normal.png'
// import Rectangle from '../../Images-tripitto/Icon/Voyage/Rectangle.png'
import User from '../../Images-tripitto/Icon/User/User.png'

// Permet l'affichage des données pour un test de la table " General_video "

class Display extends Component {
    state = {
        videos: [],
        discoveredVideo : [],
        videastes: [],
        RecentlyPublished: [],
        offset: 0,
        offsetVideaste: 0
    };

    getRecentlyPublished = async () => {
        const res = await axios.get(`http://localhost:3000/general_video/get_general_video_limite/${this.state.offset}`)
        const recentlyPubVideo = res.data
        this.setState({ videos: recentlyPubVideo })
    }
    
    getRecentlyPublishedlimit = () => {
        this.setState({offset: this.state.offset + 5}, async ()=> {
            const res = await axios.get(`http://localhost:3000/general_video/get_general_video_limite/${this.state.offset}`)
            const recentlyPubVideo = res.data
            this.setState({ videos: recentlyPubVideo },)
        })
    }

    getRecentlyPublishedlimitBack = () => {
        this.setState({offset: this.state.offset - 5}, async ()=> {
            const res = await axios.get(`http://localhost:3000/general_video/get_general_video_limite/${this.state.offset}`)
            const recentlyPubVideo = res.data
            this.setState({ videos: recentlyPubVideo },)
        })
    }

    getVideastes = async () => {
        const res = await axios.get(`http://localhost:3000/profil/get_profil_videaste_home/${this.state.offsetVideaste}`)
        this.setState({ videastes: res.data })
    }

    getVideasteLimit = () => {
        this.setState({offsetVideaste: this.state.offsetVideaste + 8}, async ()=> {
            const res = await axios.get(`http://localhost:3000/profil/get_profil_videaste_home/${this.state.offsetVideaste}`)
            const videastesLimite = res.data
            this.setState({ videastes: videastesLimite },)
        })
    }

    getVideasteLimitBack = () => {
        this.setState({offsetVideaste: this.state.offsetVideaste - 8}, async ()=> {
            const res = await axios.get(`http://localhost:3000/profil/get_profil_videaste_home/${this.state.offsetVideaste}`)
            const videastesLimite = res.data
            this.setState({ videastes: videastesLimite },)
        })
    }

    componentDidMount() {
        this.getRecentlyPublished()
        this.getVideastes()
    }
    
    
    render() {
        let i = 1
        let v = 1
        // const opts = {
            //     height: '150',
            //     width: '150',
            //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //         autoplay: 0
        //     }
        // }
        
        return (
            <>
<section className="ContainertitleRecentlyPublished">
    <div>
        <h4 className="titleRecentlyPublished">RÉCEMMENT PUBLIÉ 
        </h4>
    </div>
    <div>
        <img onClick={this.getRecentlyPublishedlimitBack} className={this.state.offset === 0 ? "leftHomeDisable" : "leftHome"} src={leftHome} alt=""></img>
    </div>
    <div>
        <img onClick={this.getRecentlyPublishedlimit} className={this.state.offset === 10 ? "leftHomeDisable" : "rightHome"} src={RightHome} alt=""></img>
    </div>
    
</section>
<section className="TitlepublishedBorder">
    <div className="TitlepublishedBorderBottom"></div>
</section>  
    
    
    <section className="RecentlyPublished">
        <div className="item1RecentlyPublished">
            {this.state.videos.reverse().map(image => (
                <div className={"latestPublishedVideo" + i} key={i++}>
                    <img src={image.cover_picture} alt={image.video_title}></img>
                    <p className="titleVideo">{image.video_title}</p>
                </div> 
            ))}
        </div>
    </section>
            <div className="marginUncover"></div>
                <section className="ContainertitleRecentlyPublished">
                    <div>
                        <h4 className="titleRecentlyPublished">DÉCOUVRIR</h4>
                    </div>
                    <div>
                        <img className="leftHome" src={leftHome} alt=""></img>
                    </div>
                    <div>
                        <img className="rightHome" src={RightHome} alt=""></img>
                    </div>
                </section>
                <section className="TitlepublishedBorder">
                    <div className="TitlepublishedBorderBottom"></div>
                </section>  
                <section className="imageUncover">
                    
                    <div className="UncoverBorder1">
                        <img src={normal} alt="asie-oceanie"></img>
                        <p className="titleUncover">Asie-oceanie</p>
                    </div>

                    <div className="UncoverBorder2">
                        <img src={normal} alt=""></img>
                        <p className="titleUncover">AMÉRIQUE</p>
                    </div>

                    <div className="UncoverBorder3">
                        <img src={normal} alt=""></img>
                        <p className="titleUncover">AFRIQUE</p>
                    </div>

                    <div className="UncoverBorder4">
                        <img src={normal} alt=""></img>
                        <p className="titleUncover">EUROPE</p>
                    </div>            
                </section>
                
                <div className="marginUncover"></div>
                <section className="ContainertitleRecentlyPublished">
                    <div className="marginVidaste">
                        <h4 className="titleRecentlyPublished">VIDÉASTES</h4>
                    </div>
                    <div>
                        <img onClick={this.getVideasteLimitBack} className={this.state.offsetVideaste === 0 ? "leftHomeDisable" : "leftHome"} src={leftHome} alt=""></img>
                    </div>
                    <div>
                        <img onClick={this.getVideasteLimit} className={this.state.offsetVideaste === 16 ? "leftHomeDisable" : "rightHome"} src={RightHome} alt=""></img>
                    </div>   
                </section>
                <section className="TitlepublishedBorder">
                    <div className="TitlepublishedBorderBottom"></div>
                </section> 
                <section>
                <div className="ContainerVideaste">                          
                    {this.state.videastes.map(videaste => (
                        <div className={"videastes"+ v} key={v++}>  
                            <div className="centerVideaste">    
                                <div className="divVideaste">
                                    <div className="borderVideaste">
                                        <img src={User} alt=""></img>
                                        <p><strong>{videaste.lastname} {videaste.firstname}</strong></p>
                                        <p>{videaste.location}</p>
                                        <p>(Numbers) Video</p>
                                        <button className="buttonVideaste">S'ABONNER</button>
                                    </div> 
                                </div> 
                            </div>  
                        </div> 
                    ))}
                    </div>
                </section>
            </>
        )
    }
}

export default Display;
