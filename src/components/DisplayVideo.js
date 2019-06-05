import React from 'react';

const DisplayVideo = ({ videos }) => {
  return (
    <>
      {videos.map(item => (
        <li key={item.id_general_video}>
          {item.video_title}
          {item.profil_id_profil}
        </li>
      ))}
    </>
  )
}

export default DisplayVideo;