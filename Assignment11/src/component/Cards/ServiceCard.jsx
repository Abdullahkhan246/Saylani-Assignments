import React from 'react'
import Button from '../button/Button'

export default function ServiceCard(props) {
  
  return (
    
        <li class="service-item">
      
            <div class="service-icon-box">
              {/* <img src="./assets/images/icon-design.svg
              " alt="design icon" width="40"/> */}
              <img src={props.image} alt="Richard hanrick" width="40" />
            </div>
      
            <div class="service-content-box">
              <h4 class="h4 service-item-title">{props.title}</h4>
      
              <p class="service-item-text">
                {props.description}
              </p>
              <Button text={props.buttontext}/>
                         </div>
                        
      
          </li>
    
  )
}
