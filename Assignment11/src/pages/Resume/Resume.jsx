import React from 'react'
import ResumeSection from '../../component/ResumeSection/ResumeSection'
import LoadingBar from '../../component/Bar/LoadingBar'

export default function Resume() {
  let resumeSection= [{
    title: 'Education',
    items:[{
      title: "University school of the arts",
      date: '2007 — 2008',
      description:'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
      title: "New york academy of art",
      date: '2006 — 2007',
      description:'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.'
    },
    {
      title: "High school of art and design",
      date: '2002 — 2004',
      description:'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
    }] },
    {title: 'Experience',
    items: [{
      
      title: "Creative director",
      date: '2015 — Present',
      description:'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
      
    },
  {
    title: "Art director",
      date: '2013 — 2015',
      description:'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
  },
{
  title: "Web designer",
      date: '2010 — 2013',
      description:'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
}]
  }]
let loadingBar=[{
  title:"Web desgin",
  data:"80%",
  width:"80%"
},{
  title:"Graphic desgin",
  data:"60%",
  width:"50%"
},{
  title:"Web development",
  data:"70%",
  width:"70%"
},{
  title:"SEO",
  data:"50%",
  width: "50%"
},
]

  return (
    <div>
       <article className="resume active" data-page="resume">

<header>
  <h2 className="h2 article-title">Resume</h2>
</header>


{
resumeSection?.map((section,index)=>{
  return(
    <ResumeSection key={index} title={
      section.title}  items={section.items} 
    />
  )})
}



<section className="skill">

  <h3 className="h3 skills-title">My skills</h3>

  <ul className="skills-list content-card">
{
loadingBar?.map((bar,index) => {
return (
  <LoadingBar key={index} title={bar.title} data={bar.data} width={bar.width}/>
)
})
}
  </ul>

</section>

</article>
    </div>
  )
}
