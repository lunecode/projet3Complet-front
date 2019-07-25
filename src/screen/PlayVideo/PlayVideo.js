import React, { Component } from 'react';
import Video from '../../components/PlayVideo/Video';
import PopularityVideo from '../../components/PlayVideo/PopularityVideo';
import TravelInfo from '../../components/PlayVideo/TravelInfo';
import DetailledInfo from '../../components/PlayVideo/DetailledInfo';
import UserCommentGet from '../../components/PlayVideo/UserCommentGet';
import UserCommentPost from '../../components/PlayVideo/UserCommentPost';
import AllVideoUser from '../../components/PlayVideo/AllVideoUser';
import './PlayVideo.css';


class PlayVideo extends Component {
  render() {
    return (
      <>
        <div className="container_all">
          <Video />
          <PopularityVideo />
          <div className="container_three">
            <div className="tr">
              <TravelInfo />
              <DetailledInfo />
            </div>
            <div className="all">
              <AllVideoUser />
              <div className="commentButtonVideo">
                <button className="buttonCommentVid">VOIR PLUS</button>
              </div>
            </div>
          </div>
          <UserCommentPost />
          <UserCommentGet />
        </div>
      </>
    )
  }
}


export default PlayVideo;
