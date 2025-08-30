import React from 'react'

export default function LoadingBar(props) {
  return (
    <li className="skills-item">

      <div className="title-wrapper">
        <h5 className="h5">{props.title}</h5>
        <data value="80">{props.data}</data>
      </div>

      <div className="skill-progress-bg">
    <div className="skill-progress-fill" style={{width: `${props.width}`}}></div>
      </div>

    </li>
  )
}
