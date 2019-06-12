import React, { Component } from 'react'

import Continent from '../../components/json/Continent.json'

class ContinentJson extends Component {
  state = {
    continent: Continent,
  }


  render() {
    console.log(Continent)
    return (
      <div>
        <select>
          {Continent.map(item => (
              <option>{item.continent}</option>
          ))}
        </select>
      </div>
    )
  }
}



export default ContinentJson;


// render() {
//   console.log(Continent)
//   return (
//     <div>
//       {Continent.map(item => (
//         <li key={item.id}>
//           {item.continent}
//       </li>
//       ))}
//     </div>
//   )
// }
// }