import React from 'react';
import { StreamApp,  NotificationDropdown } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';



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

  )
}

export default NotificationPopup