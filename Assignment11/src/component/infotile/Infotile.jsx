import React from 'react'

export default function Infotile(props) {
  return (
    
      <li className="contact-item">

<div className="icon-box">
<props.image />
</div>

  <div className="contact-info">
    <p className="contact-title">{props.title}</p>

    <a href="mailto:richard@example.com" className="contact-link">{props.link}</a>
  </div>

</li>
  
  )
}
