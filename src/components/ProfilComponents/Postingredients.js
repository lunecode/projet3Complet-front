import React, { Component } from 'react';
import axios from 'axios';

class Postingrédients extends Component {
  state = {
    ingredients: false

  }
  handleClick(e) {
    e.preventDefault();
    e = e || window.event;
    e = e.target || e.srcElement;
    console.log(e.id);
    
    // axios.post('http://localhost:3000/profil/insert_profil', this.state)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
}
  
  render() {
    const ingredients = this.state
    return (
      <div onClick={this.handleClick}>
        <img src="https://i.ibb.co/NSqJfc5/Capture-d-e-cran-2019-06-09-a-21-31-34.png"
          name="ingredients"
          id="passioné de voyage"
          value={ingredients}
          alt="L"
        />
        <img src="https://i.ibb.co/BC1SvVL/Capture-d-e-cran-2019-06-09-a-21-31-44.png"
          name="ingredients"
          id="Créateur de contenu"
          value={ingredients}
          alt="L"
        />
        <img src="https://i.ibb.co/0m2HBgp/Capture-d-e-cran-2019-06-09-a-21-32-15.png"
          name="ingredients"
          id="Photographe & Vidéaste"
          value={ingredients}
          alt="L"
        />
          <img src="https://i.ibb.co/XyKHRzx/Capture-d-e-cran-2019-06-09-a-21-32-29.png"
          name="ingredients"
          id="Bloggeur voyage"
          value={ingredients}
          alt="L"
        />
          <img src="https://i.ibb.co/brkcGx5/Capture-d-e-cran-2019-06-09-a-21-32-50.png"
          name="ingredients"
          id="Autre"
          value={ingredients}
          alt="L"
        />

      </div>
    );
  }
}


export default Postingrédients;