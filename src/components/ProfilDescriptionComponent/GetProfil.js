import React, { Component } from 'react';
import axios from 'axios';
import './GetProfil.css';

// Allow to display data from " profil " table

class GetProfil extends Component {
    state = {
        profil: [],    
      };

      getProfil = async () => {
        const res = await axios.get('http://localhost:3000/profil/get_profil')
        this.setState({ profil: res.data })
        console.log(this.state.profil)
      }
      componentDidMount() {
        this.getProfil()
      }

      render() {    
        return (
          <>
            {this.state.profil.map(item => (
            <li key={item.id_profil}>
            <div>
             <img src={item.profile_picture} alt="profil_pic" />
             <p>10 vidéos</p>
             <p>54 abonnés</p>
             <p>{item.nb_countries_visited} pays visités</p>
             </div>
             <div><p>{item.firstname} {item.lastname}</p>
             <p>{item.type}</p>
             <p>{item.location}</p>
             <p>{item.bio}</p>  
             </div>           
            </li>
          ))}
          <div>
          <button>Message</button>
          <button>Modifier profil</button>
          </div>
          </>
     )
   }
}

export default GetProfil;