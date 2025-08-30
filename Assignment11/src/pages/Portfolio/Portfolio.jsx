import React from 'react';
import project1 from '../../assets/images/project-1.jpg';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.jpg';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
import project6 from '../../assets/images/project-6.png';
import project7 from '../../assets/images/project-7.png';
import project8 from '../../assets/images/project-8.jpg';
import project9 from '../../assets/images/project-9.png';
import PortfolioCard from '../../component/Cards/PortfolioCard';


export default function Portfolio() {
  let portfolio=[{
    image: project1,
    title: 'Finance',
    category:'Web development'
  },
  {
    image: project2,
    title: 'Finance',
    category:'Web development'
  },{
    image: project3,
    title: 'Finance',
    category:'Web development'
  },{
    image: project4,
    title: 'Finance',
    category:'Web development'
  },{
    image: project5,
    title: 'Finance',
    category:'Web development'
  },{
    image: project6,
    title: 'Finance',
    category:'Web development'
  },{
    image: project7,
    title: 'Finance',
    category:'Web development'
  },{
    image: project8,
    title: 'Finance',
    category:'Web development'
  },{
    image: project9,
    title: 'Finance',
    category:'Web development'
  },]
  return (
    <article className="portfolio active" data-page="portfolio">

    <header>
      <h2 className="h2 article-title">Portfolio</h2>
    </header>

    <section className="projects">

      <ul className="filter-list">

        <li className="filter-item">
          <button className="active" data-filter-btn>All</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Web design</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Applications</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Web development</button>
        </li>

      </ul>

      <div className="filter-select-box">

        <button className="filter-select" data-select>

          <div className="select-value" data-selecct-value>Select category</div>

          <div className="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>

        </button>

        <ul className="select-list">

          <li className="select-item">
            <button data-select-item>All</button>
          </li>

          <li className="select-item">
            <button data-select-item>Web design</button>
          </li>

          <li className="select-item">
            <button data-select-item>Applications</button>
          </li>

          <li className="select-item">
            <button data-select-item>Web development</button>
          </li>

        </ul>

      </div>

      <ul className="project-list">

 {
  portfolio.map((Card,index)=>{
    return(
      <PortfolioCard key={index} image={Card.image} title={Card.title} category={Card.category}/>
    )
  })
 }

      </ul>

    </section>

  </article>
  )
}
