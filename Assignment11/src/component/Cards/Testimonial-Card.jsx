import React from 'react'

export default function TestimonialCard(props) {
  return (
    
      <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
      
              <figure class="testimonials-avatar-box">
                {/* <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar/> */}
                <img src={props.image} alt="Richard hanrick" width="60" data-testimonials-avatar />
              </figure>
      
              <h4 class="h4 testimonials-item-title" data-testimonials-title>{props.title}</h4>
      
              <div class="testimonials-text" data-testimonials-text>
                <p>
                 {props.description}
                </p>
              </div>
      
            </div>
          </li>
  )
}
