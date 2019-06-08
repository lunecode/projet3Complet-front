import React, { Component } from 'react';
import axios from 'axios'





class UserNameFirstname extends Component {
    state = {
    name: [],
};

getName = async () => {
    const res = await axios.get('http://localhost:3000/profil/get_profil')
    this.setState({ name: res.data })
    console.log(this.state.name)
}
componentDidMount() {
    this.getName()
}

render() {
    
    return (
    <>
        {this.state.name.map(item => (
        <li key={item.id_profil}>
            <p>{item.lastname}{item.firstname}</p>
        </li>
        ))}
    </>
    )
    }
}

export default UserNameFirstname;
