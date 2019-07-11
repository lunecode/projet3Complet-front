import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import './PostTravelStep.css'
// import Village from '../../Images-tripitto/Icon/etape/active/village.png';
// import Weather from '../../Images-tripitto/Icon/etape/meteo/nuagegris.png';
import Car from '../../Images-tripitto/Icon/transport/voiture.png';
import Moto from '../../Images-tripitto/Voyages/Moto.png';
import Bike from '../../Images-tripitto/Icon/Voyage/velo.png';
import Feet from '../../Images-tripitto/Icon/Voyage/Pieds.png';
import Taxi from '../../Images-tripitto/Icon/transport/taxi.png';
import Bus from '../../Images-tripitto/Icon/Voyage/Bus.png';
import uploadVideoCard3 from '../../Images-tripitto/imgUploadVideo/uploadVideoCard3.PNG'
import AboutVideoStep from '../../Images-tripitto/imgUploadVideo/AboutVideo3.PNG'
import Itinerary_Step from '../../Images-tripitto/imgUploadVideo/itinerary_step.PNG'



// UPLOAD PAGE 2 / TRAVEL STEP
// ALLOW TO INSERT DATA IN "TRAVEL STEP" TABLE
// TEST OK


// REVIEW THE TRAVEL_STEP AND TRAVEL_INFORMATION TABLES AS THE TRAVEL_INFORMATION TABLE COLUMNS:
// CURRENCY, ACCOMODATION_BUDGET, ACTIVITIES_BUDGET, TRAVEL_TYPE ARE BASED ON ITINERARY FROM THE TRAVEL_STEP TABLE


class PostTravelStep extends Component {
  state = {
    general_video_id_general_video: ''
  }


  // ALLOW TO GIVE THE ID OF THE ENUM

  way1 = () => {
    this.setState({ way_get_around: 1 })
  }
  way2 = () => {
    this.setState({ way_get_around: 2 })
  }
  way3 = () => {
    this.setState({ way_get_around: 3 })
  }
  way4 = () => {
    this.setState({ way_get_around: 4 })
  }
  way5 = () => {
    this.setState({ way_get_around: 5 })
  }
  way6 = () => {
    this.setState({ way_get_around: 6 })
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

    const { way_get_around_comment, district1, district2, district3, district_comment, accomodation1, accomodation2, accomodation3, accomodation_link1, accomodation_link2, accomodation_link3, restaurant1, restaurant2, restaurant3, bar1, bar2, bar3, must_visit1, must_visit2, must_visit3, sport_activity1, sport_activity_comment, crush, advice } = this.state

    // ALLOW TO ASSOCIATE THE ID OF THE VIDEO TO THE TRAVEL STEP
    const url = window.location.href.slice(39);
    this.state.general_video_id_general_video = url
    return (

      <form onSubmit={this.submitHandler}>

        <div className="postBody">
          <div className="grid_travel_step">
            <h1>Itinéraire</h1>

            <div className="uploadVideoCardStep">
              <img src={uploadVideoCard3}></img>
            </div>

            <div className="AboutVideoStep">
              <img src={AboutVideoStep}></img>
            </div>

            <img className="itineraty_step" src={Itinerary_Step}></img>

            <div className="white_style"></div>

            {/* this field will allow to select certain options concerning the travel with buttons, not using in this version of the site*/}

            {/* <div className="travel">
              <span className="border_travel"><img className="weather" src={Weather} alt="weather" /><img src={Village} alt="village" /><span className="duration">5 j</span></span>
              <p className="nameDuration">Fozzano</p>
              <p>Numero de l'itinéraire</p>
              <input type='number' name="step_number" value={step_number} onChange={this.changeHandler} />
              <p>Nom de l'étape</p>
              <input type='text' name="step_name" value={step_name} onChange={this.changeHandler} />
              <p>Type d'étape ( ville , village, nature )</p>
              <input type='text' name="step_type" value={step_type} onChange={this.changeHandler} />
              <span>Nbre de jours de l'étape</span>
              <input type='number' name="step_duration" value={step_duration} onChange={this.changeHandler} />
              <span>Météo de l'étape</span>
              <input type='text' name="step_weather" value={step_weather} onChange={this.changeHandler} />
              <div className="transport">
                <p>Moyen de transport entre chaque itineraire</p>
                <input type='text' name="step_transport" value={step_transport} onChange={this.changeHandler} />
              </div>
            </div> */}



            <div className="way">
              <span className="bestwaymove">Meilleurs moyen de se déplacer dans l'étape</span>


              {/* THIS INPUT RECEIVED THE ID OF THE STEP TYPE ENUM, ITS HIDDEN FOR THE FRONT */}
              <input type="hidden" name="way_get_around" value={this.state.way_get_around} onChange={this.changeHandler} />



              <div className="allButtons">
                <div className="buttonStyle" onClick={this.way1}>
                  <button className="favorite_style" type="button"><img className="car" src={Car} alt="car" />Voiture</button>
                </div>
                <div className="buttonStyle" onClick={this.way2}>
                  <button className="favorite_style" type="button"><img className="moto" src={Moto} alt="moto" /><span className="engine">Moto</span></button>
                </div>
                <div className="buttonStyle" onClick={this.way3}>
                  <button className="favorite_style" type="button"><img className="bike" src={Bike} alt="bike" /><span className="engine">Vélo</span></button>
                </div>
                <div className="buttonStyle" onClick={this.way4}>
                  <button className="favorite_style" type="button"><img className="feet" src={Feet} alt="feet" /><span className="engine">A pied</span></button>
                </div>
                <div className="buttonStyle" onClick={this.way5}>
                  <button className="favorite_style" type="button"><img className="taxi" src={Taxi} alt="taxi" /><span className="engine">Taxi</span></button>
                </div>
                <div className="buttonStyle" onClick={this.way6}>
                  <button className="favorite_style" type="button"><img className="bus" src={Bus} alt="bus" /><span className="engine">Transport en commun</span></button>
                </div>
              </div>
            </div>


            <div className="astuce">
              <input type="text" name="way_get_around_comment" value={way_get_around_comment} onChange={this.changeHandler} placeholder="Une astuce à ajouter" className="astuce1" />
            </div>




            <div className="district_step">
              <p>Meilleurs quartier ou habiter</p>
              <input type="text" name="district1" value={district1} onChange={this.changeHandler} className="dist1" placeholder="Quartier Latin" />
              <input type="text" name="district2" value={district2} onChange={this.changeHandler} className="dist2" placeholder="Le Marais" />
              <input type="text" name="district3" value={district3} onChange={this.changeHandler} className="dist3" placeholder="Montmartre" />
            </div>
            <div className="comment">
              <input type="text" name="district_comment" value={district_comment} onChange={this.changeHandler} className="comment1" placeholder="Un commentaire à rajouter" />
            </div>




            <div className="accomodation_travel">
              <p >Un hébergement à recommander</p>

              <input type="text" name="accomodation1" value={accomodation1} onChange={this.changeHandler} className="accomodation1step" placeholder="Mama Shelter" />

              <input type="text" name="accomodation2" value={accomodation2} onChange={this.changeHandler} className="accomodation2" placeholder="OFF Paris Seine" />

              <input type="text" name="accomodation3" value={accomodation3} onChange={this.changeHandler} className="accomodation3" placeholder="Hôtel Saint-Marc ***" />
            </div>

            <div className="accomodation_link">
              <input type="text" name="accomodation_link1" value={accomodation_link1} onChange={this.changeHandler} className="acco1" placeholder="Ajouter un lien web" />

              <input type="text" name="accomodation_link2" value={accomodation_link2} onChange={this.changeHandler} className="acco2" placeholder="Ajouter lien web2" />

              <input type="text" name="accomodation_link3" value={accomodation_link3} onChange={this.changeHandler} className="acco3" placeholder="Ajouter lien web3" />
            </div>




            <div className="restaurant">
              <p>Vos restaurants favoris</p>
              <input type="text" name="restaurant1" value={restaurant1} onChange={this.changeHandler} className="rest" placeholder="Brasserie Barbes" />

              <input type="text" name="restaurant2" value={restaurant2} onChange={this.changeHandler} className="rest" placeholder="Terasse Hôtel Montmartre" />

              <input type="text" name="restaurant3" value={restaurant3} onChange={this.changeHandler} className="rest" placeholder="Chez Fernand" />
            </div>


            <div className="bar">
              <p>Meilleurs lieux pour faire la fete</p>
              <p className="bar2">Pensez aux bars, rooftop, boîtes de nuit etc...</p>
              <input type="text" name="bar1" value={bar1} onChange={this.changeHandler} className="bar1" placeholder="Little Red Door" />

              <input type="text" name="bar2" value={bar2} onChange={this.changeHandler} className="bar1" placeholder="La Mazcaleria" />

              <input type="text" name="bar3" value={bar3} onChange={this.changeHandler} className="bar1" placeholder="Le Perchoir" />
            </div>



            <div className="must_visit">
              <p>Les incontournables à visiter</p>
              <p className="bar2">Pensez aux musées, site historique, parcs, marchés, plages, point de vue...</p>
              <input type="text" name="must_visit1" value={must_visit1} onChange={this.changeHandler} className="visit" placeholder="Château de Versailles" />

              <input type="text" name="must_visit2" value={must_visit2} onChange={this.changeHandler} className="visit" placeholder="Sacrée Coeur" />

              <input type="text" name="must_visit3" value={must_visit3} onChange={this.changeHandler} className="visit" placeholder="Musée D'Orsay" />
            </div>



            <div className="sportActivity">
              <p>Les activités sportives à ne pas manquer</p>

              <select className="choice" name="sport_activity1" value={sport_activity1} onChange={this.changeHandler}>
                <option selected>Selectionnez des activités</option>
                <option type="text" >Randonnée</option>

                <option type="text">Parapente</option>

                <option type="text">Plongée sous-marine</option>

                <option type="text">Saut en parachute</option>

                <option type="text">Surf</option>

                <option type="text">Golf</option>
              </select>
            </div>


            <div className="sportActivityComment">
              <input type="text" name="sport_activity_comment" value={sport_activity_comment} onChange={this.changeHandler} className="comment1" placeholder="Une adresse à partager" />
            </div>
            <div className="crushUser">
              <p>Un coup de coeur à partager</p>
              <input type="text" name="crush" value={crush} onChange={this.changeHandler} className="comment1" placeholder="Pensez à votre meilleur souvenir de voyage sur cette étape" />
            </div>



            <div className="advice">
              <p>Des conseils à partager ?</p>
              <input type="text" name="advice" value={advice} onChange={this.changeHandler} className="comment1" placeholder="Achetez vos entrées théâtres ou musées en ligne" />
            </div>



            {/* THIS INPUT ALLOW TO CAPTURE THE ID OF THE VIDEO ASSOCIATE WITH THE INFORMATION OF THIS PAGE */}
            <div className="fk_video_step">
              <input type="hidden" name="general_video_id_general_video" value={this.state.general_video_id_general_video} onChange={this.changeHandler} />
            </div>



            <div className="button2">
              <div className="styleBut">
                <button className="but1" type="submit" >ENREGISTRER</button>
              </div>
              <div className="styleBut">
                <NavLink to={`/uploadInformation/${this.state.general_video_id_general_video}`}><button className="but1">PRECEDENT</button></NavLink>
              </div>
              <div className="styleBut">
                <button className="but2" type="submit" >PUBLIER</button>
              </div>
            </div>

          </div>
        </div>
      </form>
    )
  }
}

export default PostTravelStep;
