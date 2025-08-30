import React from 'react'

export default function Resumeitem(props) {
  return (
    <li     className="timeline-item">

    <h4 className="h4 timeline-item-title">{props.title}</h4>

    <span>{props.date}</span>

    <p className="timeline-text">
     {props.description}
    </p>

  </li>
  )
}
