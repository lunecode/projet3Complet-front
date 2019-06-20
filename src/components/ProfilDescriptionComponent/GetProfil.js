import React, { Component } from 'react';
import axios from 'axios';
import './GetProfil.scss';

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
            <div key={item.id_profil} className="container">
            <div className="profil_column_1">
             <img src={item.profile_picture} alt="profil_pic" className="profilpic"/>
             <p>10 vidéos</p>
             <p>54 abonnés</p>
             <p>{item.nb_countries_visited} pays visités</p>
             </div>
             <div className="profil_column_2">
             {/* Remplacer Créateur de contenu par item.type? */}
             <p><h1>{item.firstname} {item.lastname}</h1> | Créateur de contenu</p>
             <p>{item.location}</p>
             <p>{item.bio}</p>  
             </div>           
            </div>
          ))}
          <div>
          <button>MESSAGE</button>
          <button>MODIFIER LE PROFIL</button>
          </div>
          </>
     )
   }
}

export default GetProfil;