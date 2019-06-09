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
    
    axios.post('http://localhost:3000/profil/insert_profil', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
  
  render() {
    const ingredients = this.state
    return (
      <div onClick={this.handleClick}>
        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          name="ingredients"
          id="aventure seule"
          value={ingredients}
          alt="L"
        />
        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          name="ingredients"
          id="les copains d'abord"
          value={ingredients}
          alt="L"
        />

      </div>
    );
  }
}


export default Postingrédients;