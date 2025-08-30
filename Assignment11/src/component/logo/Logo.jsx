import React from 'react'

export default function Logo(props) {
  return (
    
       <li class="clients-item">
            <a href="#">
              {/* <img src="./assets/images/logo-1-color.png" alt="client logo"/> */}
              <img src={props.logo} alt="Richard hanrick"  />
            </a>
          </li>
    
  )
}
