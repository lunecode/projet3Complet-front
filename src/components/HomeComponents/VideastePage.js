import React from 'react'
import './VideastePage.scss'

import User from '../../Images-tripitto/Icon/User/photo-videaste.jpg'
import User2 from '../../Images-tripitto/Icon/User/photo-videaste1.jpg'
import User3 from '../../Images-tripitto/Icon/User/photo-videaste3.jpg'
class VideastePage extends React.Component {
    render() {
        return (
            <section>
                 <div className="banner-videaste">
                        <h1>Vidéastes</h1>
                    </div>
                    <div className="filter_favoris">
                       <select className="w3-select_favoris" name="option">
                           <option value="" disabled selected>trier par</option>
                           <option value="1">Popularité</option>
                           <option value="2">Nombre de vidéos</option>
                           <option value="3">Nom de Vidéaste</option>
                         
                       </select>
                   </div>
                <div className="videaste-page-container">
                    <div className="videaste-bloc">  
                              
                                    <div className="videaste-info">
                                        <img src={User} alt=""></img>
                                        <p>Hanane El Farid </p>
                                        <p>Paris</p>
                                        <p>6 videos</p>
                                        <button className="videaste-btn">S'ABONNER</button>
                                    </div>     

                                    
                                    <div className="videaste-info">
                                        <img src={User} alt=""></img>
                                        <p>Hanane El Farid </p>
                                        <p>Paris</p>
                                        <p>7 videos</p>
                                        <button className="videaste-btn">S'ABONNER</button>
                                    </div>     

                                    
                                    <div className="videaste-info">
                                    <div>
                                        <img src={User2} alt=""></img>
                                        </div>
                                        <p>Ethans Evans</p>
                                        <p>Paris</p>
                                        <p>6 videos</p>
                                        <button className="videaste-btn">S'ABONNER</button>
                                    </div>     

                                    
                                    <div className="videaste-info">
                                        <img src={User3} alt=""></img>
                                        <p>Zoé Miller</p>
                                        <p>Paris</p>
                                        <p>4 videos</p>
                                        <button className="videaste-btn">S'ABONNER</button>
                                    </div>              
                
                   
                    </div>

                    <div className="videaste-bloc">  
                              
                              <div className="videaste-info">
                                  <img src={User} alt=""></img>
                                  <p>Hanane El Farid </p>
                                  <p>Paris</p>
                                  <p>6 videos</p>
                                  <button className="videaste-btn">S'ABONNER</button>
                              </div>     

                              
                              <div className="videaste-info">
                                  <img src={User2} alt=""></img>
                                  <p>Ethans Evans </p>
                                  <p>Paris</p>
                                  <p>6 videos</p>
                                  <button className="videaste-btn">S'ABONNER</button>
                              </div>     

                              
                              <div className="videaste-info">
                                  <img src={User3} alt=""></img>
                                  <p>Zoé Miller </p>
                                  <p>Paris</p>
                                  <p>6 videos</p>
                                  <button className="videaste-btn">S'ABONNER</button>
                              </div>     

                              
                              <div className="videaste-info">
                                  <img src={User} alt=""></img>
                                  <p>Hanane El Farid </p>
                                  <p>Paris</p>
                                  <p>6 videos</p>
                                  <button className="videaste-btn">S'ABONNER</button>
                              </div>              
          
             
              </div>

              

              <div className="btn-voir-plus-bloc">
              <button className="btn-voir-plus">Voir plus</button>
              </div>
                </div>
            </section>
        )
    }
}

export default VideastePage