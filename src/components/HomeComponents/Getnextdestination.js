import React, { Component } from 'react';
import axios from 'axios'
import './Getnextdestination.scss';
import leftarrow from '../../pictures/arrow_left.png'
import rightarrow from '../../pictures/arrow_right.png'
import leftHome from '../../Images-tripitto/Icon/leftHome.png'
import RightHome from '../../Images-tripitto/Icon/RightHome.png'
import { NavLink } from 'react-router-dom'

class Getnextdestination extends Component {
  state = {
    nextpicture: [],
    videos: [],
    numbertips: [],
    offset: 0,
    offsetBestplan: 0
  };



  getnumbertips = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/general_video/get_general_video_nextdestination_tauxderemplissage'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/general_video/get_general_video_nextdestination_tauxderemplissage'
    }
    const res = await axios.get(pathApi)
    this.setState({ numbertips: res.data })
  }



  getnextvideo = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_general_video'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_general_video'
    }
    const res = await axios.get(pathApi)
    const Nextdestination = res.data
    this.setState({ nextpicture: Nextdestination })
  }



  getnextvideolimit = () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_general_video'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_general_video'
    }
    this.setState({ offset: this.state.offset + 5 }, async () => {
      const res = await axios.get(`${pathApi}/${this.state.offset}`)
      const Nextdestination = res.data
      this.setState({ nextpicture: Nextdestination })
    })
  }



  getnextvideolimitBack = () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/travel_information/get_travelinformation_general_video'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/travel_information/get_travelinformation_general_video'
    }
    this.setState({ offset: this.state.offset - 5 }, async () => {
      const res = await axios.get(`${pathApi}/${this.state.offset}`)
      const Nextdestination = res.data
      this.setState({ nextpicture: Nextdestination })
    })
  }




  getbestplan = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/popularity/get_popularity_liked_general_video_travel_information2'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/popularity/get_popularity_liked_general_video_travel_information2'
    }
    const res = await axios.get(pathApi)
    const Bestplan = res.data
    this.setState({ videos: Bestplan })
  }



  getbestplanlimit = () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/popularity/get_popularity_liked_general_video_travel_information2'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/popularity/get_popularity_liked_general_video_travel_information2'
    }
    this.setState({ offsetBestplan: this.state.offsetBestplan + 4 }, async () => {
      const res = await axios.get(`${pathApi}/${this.state.offsetBestplan}`)
      const Bestplan = res.data
      this.setState({ videos: Bestplan })
    })
  }



  getbestplanlimitBack = () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/popularity/get_popularity_liked_general_video_travel_information2'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/popularity/get_popularity_liked_general_video_travel_information2'
    }
    this.setState({ offsetBestplan: this.state.offsetBestplan - 4 }, async () => {
      const res = await axios.get(`${pathApi}/${this.state.offsetBestplan}`)
      const Bestplan = res.data
      this.setState({ videos: Bestplan })
    })
  }


  componentDidMount() {
    this.getnextvideo()
    this.getbestplan()
    this.getnumbertips()
  }
  render() {
    let i = 1
    let a = 1
    let b = 1
    let c = 1


    return (
      <>
        {/****************************** SECTION NEXT DESTINATION******************************* */}
        <section className='nextdestination'>

          <div className="wrapper-nextpicture">

            {this.state.nextpicture.map(nextpicture => (
              <div className={"divpictureNext" + i} key={i++}>
                <NavLink to={`/playvideo/${nextpicture.id_general_video}`} ><img src={nextpicture.cover_picture} alt="" className={"nextpictureimg" + a} key={a++} /></NavLink>
                <p className={"p" + b} key={b++}>{nextpicture.video_title}</p> <br />
                <p className={"p" + b} key={b++}>{nextpicture.countries}</p>
              </div>
            ))}

          </div>
          <div>
            <img onClick={this.getnextvideolimitBack} className={this.state.offset === 0 ? "leftarrowDisable" : "leftarrow"} src={leftarrow} alt=""></img>
          </div>
          <div>
            <img onClick={this.getnextvideolimit} className={this.state.offset === 15 ? "rightarrowDisable" : "rightarrow"} src={rightarrow} alt=""></img>
          </div>
        </section>

        {/****************************** SECTION BEST PLAN  ***************************** */}
        <section className="bestplan">
          <div className='container_bestplan_title'>
            <h2 className="title_best_plan">AVEC UN MAXIMUM DE BONS PLANS</h2>
          </div>
          <div>
            <img onClick={this.getbestplanlimitBack} className={this.state.offsetBestplan === 0 ? "leftHomeDisable1" : "leftHome2"} src={leftHome} alt=""></img>
          </div>
          <div>
            <img onClick={this.getbestplanlimit} className={this.state.offsetBestplan === 8 ? "leftHomeDisable2" : "rightHome2"} src={RightHome} alt=""></img>
          </div>
        </section>
        <div className="container_bestplan">
          {this.state.videos.map(video => (
            <div className={"divVideoPLan"}>

              
              <NavLink to={`/playvideo/${video.id_general_video}`} ><img src={video.cover_picture} className={"nextpictureimg" + a} key={a++} className='picture_bestplan' alt='' /></NavLink>

              {/* <NavLink to={`/playvideo/${video.id_general_video}`} ><img src={video.cover_picture} className={"nextpictureimg" + a} key={a++} className='picture_bestplan' alt='' /></NavLink> */}

              

              <div className='container_title_bestplan_numbertips'>
                <p className='title_bestplan_numbertips'>+{video.tx_remplissage}%</p>
              </div>
              <div className='container_title_bestplan_video_duration'>
                <p className='title_bestplan_video_duration'>{video.video_duration}</p>
              </div>
              <p className='title_bestplan_title'>{video.video_title}</p>

              <p className='title_bestplan_countries'>{video.countries}</p>

              <ul className='container_nb_view'>
                <li><p className='title_bestplan_nbviews'>{video.nb_views} vues</p></li>
              </ul>
              <p className='title_bestplan_user'>{video.video_user}</p>
            </div>
          ))}
          <div className='container_contributors_title'>
            <h2 className="title_contributors">Merci à nos contributeurs</h2>
            <div className='contributor_name'>
              <p>Adam Denisov</p>
              <p>Alexander Ljung</p>
              <p>Aneta Skodova</p>
              <p>Athar Malakooti</p>
              <p>Boniface Esanji</p>
              <p>Cadarion Hart</p>
              <p>Charles Davies</p>
              <p>Chioke Chinasa</p>
              <p>Clarke Gillebert</p>
              <p>Dusya Sigachoya</p>
              <p>Faadi Arache</p>
              <p>Fyodor Dyzenhkov</p>
              <p>Heather Clarke</p>
              <p>Homoru Yunosuke</p>
              <p>Ivan Polo</p>
              <p>Jafaros Long</p>
              <p>Jesus Banuelos</p>
              <p>Kiandra Lowe</p>
              <p>Labeeba Almer</p>
            </div>
            <button className="buttonContributor">VOIR PLUS</button>
          </div>
        </div>
      </>
    )
  }
}

export default Getnextdestination;