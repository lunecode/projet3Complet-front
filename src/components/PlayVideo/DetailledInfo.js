import React, { Component } from 'react';
import axios from 'axios'





class DetailledInfo extends Component {
    state = {
    detailledInfo: [],
};

getDetailledInfo = async () => {
    const res = await axios.get('http://localhost:3000/travel_step/get_travelstep')
    this.setState({ detailledInfo: res.data })
    console.log(this.state.detailledInfo)
}
componentDidMount() {
    this.getDetailledInfo()
}

render() {
    
    return (
    <>
        {this.state.detailledInfo.map(item => (
        <li key={item.id_travel_step}>
            <li>{item.video_travel_step}</li>
            <li>{item.step_number}</li>
            <li>{item.step_name}</li>
            <li>{item.step_type}</li>
            <li>{item.step_duration}</li>
            <li>{item.step_weather}</li>
            <li>{item.step_transport}</li>
            <li>{item.way_get_around}</li>
            <li>{item.way_get_around_comment}</li>
            <li>{item.district1}</li>
            <li>{item.district2}</li>
            <li>{item.district3}</li>
            <li>{item.district_comment}</li>
            <li>{item.accomodation1}</li>
            <li>{item.accomodation2}</li>
            <li>{item.accomodation3}</li>
            <li>{item.accomodation_link1}</li>
            <li>{item.accomodation_link2}</li>
            <li>{item.accomodation_link3}</li>
            <li>{item.restaurant1}</li>
            <li>{item.restaurant2}</li>
            <li>{item.restaurant3}</li>
            <li>{item.restaurant4}</li>
            <li>{item.restaurant5}</li>
            <li>{item.restaurant6}</li>
            <li>{item.bar1}</li>
            <li>{item.bar2}</li>
            <li>{item.bar3}</li>
            <li>{item.bar4}</li>
            <li>{item.bar5}</li>
            <li>{item.bar6}</li>
            <li>{item.must_visit1}</li>
            <li>{item.must_visit2}</li>
            <li>{item.must_visit3}</li>
            <li>{item.must_visit4}</li>
            <li>{item.must_visit5}</li>
            <li>{item.must_visit6}</li>
            <li>{item.sport_activity1 }</li>
            <li>{item.sport_activity2 }</li>
            <li>{item.sport_activity3 }</li>
            <li>{item.sport_activity4 }</li>
            <li>{item.sport_activity5 }</li>
            <li>{item.sport_activity6}</li>
            <li>{item.sport_activity_comment}</li>
            <li>{item.crush}</li>
            <li>{item.advice}</li>
        </li>
        ))}
    </>
    )
    }
}

export default DetailledInfo;
