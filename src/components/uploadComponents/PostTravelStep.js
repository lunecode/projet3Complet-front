import React, { Component } from 'react'
import axios from 'axios'
import './PostTravelStep.css'
import Village from '../../Images-tripitto/Icon/etape/active/village.png';
import Weather from '../../Images-tripitto/Icon/etape/meteo/nuagegris.png';
import Car from '../../Images-tripitto/Icon/transport/voiture.png';
import Moto from '../../Images-tripitto/Icon/Voyage/Moto.png';
import  Bike from '../../Images-tripitto/Icon/Voyage/velo.png';
import  Feet from '../../Images-tripitto/Icon/Voyage/Pieds.png';
import  Taxi from '../../Images-tripitto/Icon/transport/taxi.png';
import  Bus from '../../Images-tripitto/Icon/Voyage/Bus.png';

// UPLOAD PAGE 2 / TRAVEL STEP
// ALLOW TO INSERT DATA IN "TRAVEL STEP" TABLE
// TEST OK


// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE


class PostTravelStep extends Component {
  state = {
    
    
  }

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.post('http://localhost:3000/travel_step/insert_travelstep', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

render() {
  const { step_number, step_name, step_type, step_duration, step_weather, step_transport, way_get_around, way_get_around_comment, district1, district2, district3, district_comment, accomodation1, accomodation2, accomodation3, accomodation_link1, accomodation_link2, accomodation_link3, restaurant1, restaurant2, restaurant3, bar1, bar2, bar3, must_visit1, must_visit2, must_visit3, sport_activity1, sport_activity2, sport_activity3, sport_activity_comment, crush, advice, general_video_id_general_video } = this.state
  return (
    
      <form onSubmit={this.submitHandler}>
       
        <div className="grid">
        <h1>Itinéraire</h1>
          
          <div className="videoUser">


          </div>
{/*          
          this field will allow to select certain options concerning the travel with buttons */}
          <div className="travel">


          <span className="border_travel"><img className="weather" src={Weather} alt="weather"/><img src={Village} alt="village"/><span className="duration">5 j</span></span>
          <p>Fozzano</p>
            {/* <p>Numero de l'itinéraire</p>
            <input type='number' name="step_number" value={step_number} onChange={this.changeHandler} />
            <p>Nom de l'étape</p>
            <input type='text' name="step_name" value={step_name} onChange={this.changeHandler} />
          <p>Type d'étape ( ville , village, nature )</p>
            <input type='text' name="step_type" value={step_type} onChange={this.changeHandler} />
            <span>Nbre de jours de l'étape</span>
            <input type='number' name="step_duration" value={step_duration} onChange={this.changeHandler} />
            <span>Météo de l'étape</span>
            <input type='text' name="step_weather" value={step_weather} onChange={this.changeHandler} /> */}
            <div className="transport">
            <p>Moyen de transport entre chaque itineraire</p>
            <input type='text' name="step_transport" value={step_transport} onChange={this.changeHandler} />
          </div>
            </div>
            <div className="way">
            <span>Meilleurs moyen de se déplacer dans l'étape</span>
            {/* <input type="text" name="way_get_around" value={way_get_around} onChange={this.changeHandler} /> */}
            <div className="allButtons">
            <div className="buttonStyle">
              <button className="favorite_style" type="button"><img className="moto" src={Car} alt="car"/>Voiture</button>
            </div>
            <div className="buttonStyle">
              <button className="favorite_style" type="button"><img className="moto" src={Moto} alt="moto"/>Moto</button>
            </div>
            <div className="buttonStyle">
            < button className="favorite_style" type="button"><img className="bike" src={Bike} alt="bike"/>Vélo</button>
            </div>
            <div className="buttonStyle">
              <button className="favorite_style" type="button"><img className="feet" src={Feet} alt="feet"/>A pied</button>
            </div>
            <div className="buttonStyle">
              <button className="favorite_style" type="button"><img className="taxi" src={Taxi} alt="taxi"/>Taxi</button>
            </div>
            <div className="buttonStyle"> 
              <button className="favorite_style" type="button"><img className="bus" src={Bus} alt="bus"/>Transport en commun</button>
            </div>
          </div>
          </div>  
          <div  className="astuce">
            {/* <p>Astuce à ajouter sur le moyen de déplacement</p> */}
            <input type="text" name="way_get_around_comment" value={way_get_around_comment} onChange={this.changeHandler} placeholder="Une astuce à ajouter" className="astuce1"/>
          </div>
          <div className="district">
            <p>Meilleurs quartier ou habiter</p>
            <input type="text" name="district1" value={district1} onChange={this.changeHandler} className="dist1" placeholder="Quartier Latin"/>
            <input type="text" name="travedistrict2l_type" value={district2} onChange={this.changeHandler} className="dist2" placeholder="Le Marais"/>
            <input type="text" name="district3" value={district3} onChange={this.changeHandler} className="dist3" placeholder="Montmartre"/>
          </div>
          <div className="comment">
            <p>Un commentaire à ajouter sur le quartier ou habiter</p>
            <input type="text" name="district_comment" value={district_comment} onChange={this.changeHandler} className="comment1" placeholder="Un commentaire à rajouter"/>
          </div>
          <div className="accomodation">
            <div>
            <p >Un hébergement à recommander</p>
            <input type="text" name="accomodation1" value={accomodation1} onChange={this.changeHandler} className="link" placeholder="Mama Shelter"/>
            
            <input type="text" name="accomodation_link1" value={accomodation_link1} onChange={this.changeHandler} className="acco1"/>
            <a href="#" >+ Ajouter lien web</a>
            </div>
            {/* <div className="accomodation_link">
            
          </div> */}
          <div>
            <p>Un hébergement à recommander2</p>
            <input type="text" name="accomodation2" value={accomodation2} onChange={this.changeHandler} className="link" placeholder="OFF Paris Seine"/>
          
            <input type="text" name="accomodation_link2" value={accomodation_link2} onChange={this.changeHandler} className="acco2"/>
            <a >Ajouter lien web2</a>
          </div>
          {/* <div>
            
          </div> */}
          <div>
            <p>Un hébergement à recommander3</p>
            <input type="text" name="accomodation3" value={accomodation3} onChange={this.changeHandler} className="link" placeholder="Hôtel Saint-Marc ***"/>
           
            <input type="text" name="accomodation_link3" value={accomodation_link3} onChange={this.changeHandler} className="acco3"/>
            <a>Ajouter lien web3</a>
          </div>
          {/* <div>
            
          </div> */}
          </div>
          <div className="restaurant">
            <p>Vos restaurants favoris</p>
            <input type="text" name="restaurant1" value={restaurant1} onChange={this.changeHandler} className="rest" placeholder="Brasserie Barbes"/>
            {/* <p>Vos restaurants favoris2</p> */}
            <input type="text" name="restaurant2" value={restaurant2} onChange={this.changeHandler} className="rest" placeholder="Terasse Hôtel Montmartre"/>
            {/* <p>Vos restaurants favoris3</p> */}
            <input type="text" name="restaurant3" value={restaurant3} onChange={this.changeHandler} className="rest" placeholder="Chez Fernand"/>
          </div>

            <div className="bar">
            <p>Meilleurs lieux pour faire la fete</p>
            <p className="bar2">Pensez aux bars, rooftop, boîtes de nuit etc...</p>
            <input type="text" name="bar1" value={bar1} onChange={this.changeHandler} className="bar1" placeholder="Little Red Door"/>
            {/* <p>Meilleurs lieux pour faire la fete2</p> */}
            <input type="text" name="bar2" value={bar2} onChange={this.changeHandler} className="bar1" placeholder="La Mazcaleria"/>
            {/* <p>Meilleurs lieux pour faire la fete3</p> */}
            <input type="text" name="bar3" value={bar3} onChange={this.changeHandler} className="bar1" placeholder="Le Perchoir"/>
          </div>
          
          <div className="must_visit"> 
            <p>Les incontournables à visiter</p>
            <p className="bar2">Pensez aux musées, site historique, parcs, marchés, plages, point de vue...</p>
            <input type="text" name="must_visit1" value={must_visit1} onChange={this.changeHandler} className="visit" placeholder="Château de Versailles"/>
            {/* <p>Les incontournables à visiter2</p> */}
            <input type="text" name="must_visit2" value={must_visit2} onChange={this.changeHandler} className="visit" placeholder="Sacrée Coeur"/>
            {/* <p>Les incontournables à visiter3</p> */}
            <input type="text" name="must_visit3" value={must_visit3} onChange={this.changeHandler} className="visit" placeholder="Musée D'Orsay"/>

          </div>
          <div className="sportActivity">
            <p>Les activités sportives à ne pas manquer</p>
            <select className="choice">
            <option selected></option>
            <option type="text" name="sport_activity1" value={sport_activity1} onChange={this.changeHandler} >Football</option>
           
            {/* <p>Les activités sportives à ne pas manquer2</p> */}
            <option type="text" name="sport_activity2" value={sport_activity2} onChange={this.changeHandler} >Natation</option>
            {/* <p>Les activités sportives à ne pas manquer3</p> */}
            <option type="text" name="sport_activity3" value={sport_activity3} onChange={this.changeHandler}>Tennis</option>
            </select>
          </div>
          <div className="sportActivityComment">
            <p>Une adresse d'activité sportive à partager</p>
            <input type="text" name="sport_activity_comment" value={sport_activity_comment} onChange={this.changeHandler} />
          </div>
          <div className="crushUser">
            <p>Un coup de coeur à partager</p>
            <input type="text" name="crush" value={crush} onChange={this.changeHandler} />
          </div>
          <div className="advice">
            <p>Des conseils à partager ?</p>
            <input type="text" name="advice" value={advice} onChange={this.changeHandler} />
          </div>
          <div className="button">
            <button type="submit">Submit</button>
            <p>Fk de l'Id de general_video</p>
            <input type="text" name="general_video_id_general_video" value={general_video_id_general_video} onChange={this.changeHandler} />
          </div>
          </div>
      </form>
   
  )
}
}

export default PostTravelStep;
