import React, { Component } from 'react'
import axios from 'axios'


class PutProfilInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id_profil:'',
      profile_picture:'',
      pseudo:'',
      location:'',
      profil_link:'',
      birth_date:'',
      nb_countries_visited:'',
      email:'',
      lastname:'',
      firstname:'',
      type:'',
      position:'',
      inscription_date:'',
      inscription_type:'',
      password:'',
      password_forget:'',
      
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  axios.put(`http://localhost:3000/profil//put_profil/${this.state.id_profil}`, this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

}

  render() {
    const { id_profil,profil_link,lastname,firstname,email,identity,password,password_forget,type,position,inscription_date,inscription_type, profile_picture,nb_countries_visited,birth_date,location,pseudo} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <div>
            <label htmlFor="id_profil">Id profil</label>
            <input type='text' name="id_profil" value={id_profil} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="profile_picture">Profil Picture</label>
            <input type='text' name="profile_picture" value={profile_picture} onChange={this.changeHandler} />
          </div>
          <div>
          <label htmlFor="pseudo">Nom complet ou pseudo</label>
            <input type="text" name="pseudo" value={pseudo} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="lastname">lastname</label>
            <input type="text" name="lastname" value={lastname} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="location">Location</label>
            <input type="text" name="location" value={location} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="firstname">Firstname</label>
            <input type="text" name="firstname" value={firstname} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="type">Type</label>
            <input type="text" name="type" value={type} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="position">Position</label>
            <input type="text" name="position" value={position} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="inscription_date">Date d'inscription</label>
            <input type="text" name="inscription_date" value={inscription_date} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="inscription_type">Type d'inscription</label>
            <input type="text" name="inscription_type" value={inscription_type} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="password">Mot de passe</label>
            <input type="text" name="password" value={password} onChange={this.changeHandler}/>
          </div>
          
          <div>
          <label htmlFor="password_forget">Mot de passe oublié</label>
            <input type="text" name="password_forget" value={password_forget} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="profil_link">Lien de votre profil tripitto</label>
            <input type="text" name="profil_link" value={profil_link} onChange={this.changeHandler}/>
          </div>
       {/* < div>
          <label htmlFor="identity">Identity</label>
          <label htmlFor="lui">Lui</label>
          <input type="checkbox" id="lui" name="identity" value={identity} onChange={this.changeHandler} />
          <label htmlFor="elle">Elle</label>
          <input type="checkbox" id="elle" name="identity" value={identity} onChange={this.changeHandler} />
          <label htmlFor="equipe">Equipe</label>
          <input type="checkbox" id="equipe" name="identity" value={identity} onChange={this.changeHandler} />
         </div>  */}
         <div>
         <label htmlFor="birth_date">Date de naissance</label>
            <input type="text" name="birth_date" value={birth_date} onChange={this.changeHandler}/>
          </div>
          <div>
          <label htmlFor="nb_contries_visited">Nombre de pays visités</label>
            <input type="text" name="nb_countries_visited" value={nb_countries_visited} onChange={this.changeHandler}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PutProfilInfo
