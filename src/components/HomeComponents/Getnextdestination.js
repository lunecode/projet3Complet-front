import React, { Component } from 'react';
import axios from 'axios'

import { NavLink } from 'react-router-dom';

import './Getnextdestination.scss';

import arrow from '../../pictures/arrow.png'
import leftHome from '../../Images-tripitto/Icon/leftHome.png'
import RightHome from '../../Images-tripitto/Icon/RightHome.png'



class Getnextdestination extends Component {
	state = {
		nextpicture: [],
		videos: [],
		bestplan: 1,
		// idVideo: ''
	};


	getnextvideo = async () => {
		const res = await axios.get('http://localhost:3000/general_video/get_general_video_home')
		this.setState({ nextpicture: res.data })
		// test = this.nextpicture
		// console.log(this.state.nextpicture)
	}


	

	getbestplan = async () => {
		const res = await axios.get('http://localhost:3000/popularity/get_popularity_liked_general_video_travel_information2')
		this.setState({ videos: res.data })
		console.log(this.state.videos)
	}

	selectbestplan = () => {
		this.setState({ BestPlan: +5 })
		console.log(this.state.BestPlan)
	}

	selectbestplanBack = () => {
		this.setState({ BestPlan: -5 })
		console.log(this.state.BestPlan)
	}

	componentDidMount() {
		this.getnextvideo()
		this.getbestplan()
		this.selectbestplan()
		this.selectbestplanBack()
	}

	render() {
		let i = 1
		let a = 1
		let b = 1
		let c = 1

		return (
			<>
				{/****************************** SECTION NEXT DESTINATION******************************* */}
				<section className='nextdestination'>

					<div class="wrapper-nextpicture">

						<div className='container_arrow'>
							<img onClick={this.selectbestplan} className="leftarrow" src={arrow} alt=""></img>
							<img onClick={this.selectbestplanBack} className="rightarrow" src={arrow} alt=""></img>
						</div>

						{this.state.nextpicture.map(nextpicture => (
							<div className={"divpictureNext" + i} key={i++}>
								{/* <p>{nextpicture.id_general_video}</p> */}



								<NavLink to={`/playvideo/${nextpicture.id_general_video}`} ><img src={nextpicture.cover_picture} className={"nextpictureimg" + a} key={a++} /></NavLink>


								<p className={"p" + b} key={b++}>{nextpicture.video_title}</p> <br />
								<p className={"p" + b} key={b++}>{nextpicture.countries}</p>
							</div>
						))}

					</div>
				</section>

				{/****************************** SECTION BEST PLAN  ***************************** */}
				<section className="bestplan">
					<div className='container_bestplan_title'>
						<h2 className="title_best_plan">AVEC UN MAXIMUM DE BONS PLANS</h2>
					</div>
					<div>
						<img onClick={this.selectbestplan} className="leftHome" src={leftHome} alt=""></img>
					</div>
					<div>
						<img onClick={this.selectbestplanBack} className="rightHome" src={RightHome} alt=""></img>
					</div>
				</section>
				<div class="container_bestplan">
					{this.state.videos.map(video => (
						<div className={"divVideoPLan" + c} key={c++}>
							<img src={video.cover_picture} className='picture_bestplan' />
							<div className='container_title_bestplan_numbertips'>
								<p className='title_bestplan_numbertips'>+{video.number_tips}%</p>
							</div>
							<div className='container_title_bestplan_video_duration'>
								<p className='title_bestplan_video_duration'>{video.video_duration}</p>
							</div>
							<p className='title_bestplan_title'>{video.video_title}</p>
							<p className='title_bestplan_countries'>{video.countries}</p>
							<p className='title_bestplan_user'>{video.video_user}</p>
							<p className='title_bestplan_nbviews'>{video.nb_views} vues</p>
						</div>
					))}
					<div className='container_contributors_title'>
						<h2 className="title_contributors">Merci à nos contributeurs</h2>
						<div className='contributor_name'>
							<p>Adam Denisov</p>
							<p>Alexander Ljung</p>
							<p>Aneta Skodova</p>
							<p>Athar Malakooti</p>
							<p>Boniface Esanji</p>
							<p>Cadarion Hart</p>
							<p>Charles Davies</p>
							<p>Chioke Chinasa</p>
							<p>Clarke Gillebert</p>
							<p>Dusya Sigachoya</p>
							<p>Faadi Arache</p>
							<p>Fyodor Dyzenhkov</p>
							<p>Heather Clarke</p>
							<p>Homoru Yunosuke</p>
							<p>Ivan Polo</p>
							<p>Jafaros Long</p>
							<p>Jesus Banuelos</p>
							<p>Kiandra Lowe</p>
							<p>Labeeba Almer</p>
						</div>
					</div>
				</div>



			</>
		)
	}
}



export default Getnextdestination;