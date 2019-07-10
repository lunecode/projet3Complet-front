import React from 'react';
<<<<<<< HEAD
import { StreamApp,  NotificationDropdown } from 'react-activity-feed';
=======
import { StreamApp, NotificationDropdown, } from 'react-activity-feed';
// import { StreamApp, NotificationDropdown, LoadMorePaginator, } from 'react-activity-feed';
>>>>>>> 9ae180024c27f773543328cc26578b1deb13bc8a
import 'react-activity-feed/dist/index.css';



<<<<<<< HEAD
const NotificationPopup =()=>{
  return(
    
<StreamApp
  
      apiKey="du8he7epvp94"
      appId="45206"
      token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzY3NGQwZTQtZjhmNC00ODZlLTlkNzAtM2Q1YWYzMDczNmI4In0.gdm2EVRNRf4e1W9loEo9MbE7hUWFrnTO79Br6EvoUPY"
     >

  <NotificationDropdown 
    right
    notify
  />
  

</StreamApp>

=======
const NotificationPopup = () => {
  return (
    <StreamApp
      apiKey="du8he7epvp94"
      appId="45206"
      token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMzY3NGQwZTQtZjhmNC00ODZlLTlkNzAtM2Q1YWYzMDczNmI4In0.gdm2EVRNRf4e1W9loEo9MbE7hUWFrnTO79Br6EvoUPY"
    >

      <NotificationDropdown
        right
        // Icon={<Icon />}
        notify
      />



    </StreamApp>
>>>>>>> 9ae180024c27f773543328cc26578b1deb13bc8a
  )
}

export default NotificationPopup