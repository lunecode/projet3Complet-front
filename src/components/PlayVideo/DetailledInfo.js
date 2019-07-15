import React, { Component } from 'react';
import axios from 'axios'
import './DetailledInfo.css';
import Weather from '../../Images-tripitto/Icon/etape/meteo/nuagegris.png';
import Village from '../../Images-tripitto/Icon/etape/active/village.png';
import Moto from '../../Images-tripitto/Icon/Voyage/Moto.png';
import Bed from '../../Images-tripitto/Icon/hebergement.png';
import Food from '../../Images-tripitto/Icon/Ingredients/plaisir_culinaire.png';
import Museum from '../../Images-tripitto/Icon/Visites.png';
import Sport from '../../Images-tripitto/Icon/sport.png';
import Love from '../../Images-tripitto/Icon/Love.png';
import Idea from '../../Images-tripitto/Icon/Idea.png';





class DetailledInfo extends Component {
    state = {
    detailledInfo: [],
};

getDetailledInfo = async () => {
    const res = await axios.get('http://localhost:3000/travel_step/get_travelstep')
    this.setState({ detailledInfo: res.data })
    // console.log(this.state.detailledInfo)
}
componentDidMount() {
    this.getDetailledInfo()
}

render() {
    let i = 1;

    const url = window.location.href; 
    const idDetailledVideo = url.slice(32)
    
    
    return (
    <>
        {this.state.detailledInfo.filter(item =>  item.id_travel_step == idDetailledVideo).map (item =>(
        <div className="container_globalTravel" key={i++}>
        <div key={item.id_travel_step}>
        <div className="container_info" key={item.id_travel_step}>
            <div className="container_detailled">
                <div className="container_trip">
                    <span className="border"><img className="weather" src={Weather} alt="weather"/> <img src={Village} alt="village"/> 
                    <span className="step1">{item.step_number}
                    </span>{item.step_weather} <span>{item.step_name}</span></span>
                    <span>{item.video_travel_step}</span>
                    <span>{item.step_name}</span>
                    <span>{item.step_type}</span>
                    <span>{item.step_duration}</span>
                    <p>Se déplacer en {item.step_transport}  <span className="location">Louez avant votre arrivée sur le site des compagnies internationales.</span> 
                    </p>
                    <p> Plutôt habiter vers Mayan ou Taynan </p>
                    <p>
                        {/* <img className="oval" src={Oval2} alt="oval"/> */}
                        <img className="bed" src={Bed} alt="bed"/><span className="district1">{item.district1}</span> |
                    <span className="district">{item.district2}</span> |
                    <span className="district"> {item.district3}</span>
                    </p> 
                    {/* <li>{item.way_get_around}</li>
                    <li>{item.way_get_around_comment}</li> */}
                    
                    {/* <li>{item.district_comment}</li>
                    <li>{item.accomodation1}</li>
                    <li>{item.accomodation2}</li>
                    <li>{item.accomodation3}</li>
                    <li>{item.accomodation_link1}</li>
                    <li>{item.accomodation_link2}</li>
                    <li>{item.accomodation_link3}</li> */}
                    <p><img className="food" src={Food} alt="food"/>            <span className="district1">{item.restaurant1}</span> |     
                    <span className="district">{item.restaurant2}</span>  | 
                    <span className="district">{item.restaurant3}</span> </p>   
                    {/* <li>{item.restaurant4}</li>
                    <li>{item.restaurant5}</li>
                    <li>{item.restaurant6}</li> */}
                    <p><span>{item.bar1}</span></p>
                    {/* <li>{item.bar2}</li>
                    <li>{item.bar3}</li>
                    <li>{item.bar4}</li>
                    <li>{item.bar5}</li>
                    <li>{item.bar6}</li> */}
                    <p><img className="Museum" src={Museum} alt="museum"/><span className="museum">{item.must_visit1}</span>  |
                    <span className="museum1">{item.must_visit2}</span></p>
                    {/* <li>{item.must_visit3}</li>
                    <li>{item.must_visit4}</li>
                    <li>{item.must_visit5}</li>
                    <li>{item.must_visit6}</li> */}
                    <p><img className="sport" src={Sport} alt="sport"></img>
                    <span className="museum">{item.sport_activity1 }</span> | <span className="museum1">{item.sport_activity2 }</span> | <span className="museum1">{item.sport_activity3 }</span></p>

                    {/* <li>{item.sport_activity4 }</li>
                    <li>{item.sport_activity5 }</li>
                    <li>{item.sport_activity6}</li> */}
                    <p className="comment_sport">{item.sport_activity_comment}</p>
                    <p><img className="love" src={Love} alt="love"></img>{item.crush}</p>
                    <p ><img className="idea" src={Idea} alt="idea"></img>{item.advice}</p>
                    <div className="tripButton">
                    <button className="buttonTrip">VOIR ETAPE SUIVANTE</button>
                    </div>                    
                </div>
            </div>
        </div>
        </div>
        </div>
        ))}
    </>
    )
    }
}

export default DetailledInfo;
