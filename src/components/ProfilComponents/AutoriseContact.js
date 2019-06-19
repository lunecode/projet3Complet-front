import React, { Component } from 'react';
import Idea from "../../Images-tripitto/Icon/Idea.png"
import './StyleProfilInfo.css'
import axios from 'axios'

class AutoriseContact extends Component {
    state={
        option_msg:""
    }

    handleCheckbox = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }



    render() {
        const{option_msg}=this.state
        return (
            <div>
                <h3><input type="checkbox" id="ok" name="checked_option_msg" value={option_msg}
                  checked={this.state.checked_option_msg}
                  onChange={this.handleCheckbox} className="" />J'autorise les memebres Tripitto à me contacter pour une collooboration </h3>
                <p> <img src={Idea} alt="icon" />Cela apparaitra sur votre page de profil visible par tous</p>
           
            </div>
        );
    }
}

export default AutoriseContact;