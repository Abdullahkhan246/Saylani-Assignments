import React from 'react';
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import blog4 from '../../assets/images/blog-4.jpg';
import blog5 from '../../assets/images/blog-5.jpg';
import blog6 from '../../assets/images/blog-6.jpg';
import BlogCard from '../../component/Cards/BlogCard';

export default function Blog() {
  let blog=[{
    image: blog1,
    title1: 'Design',
    date: 'Fab 23, 2022',
    title2:'Design conferences in 2022',
    description:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  },{
    image: blog2,
    title1: 'Design',
    date: 'Fab 23, 2022',
    title2:'Design conferences in 2022',
    description:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  },{
    image: blog3,
    title1: 'Design',
    date: 'Fab 23, 2022',
    title2:'Design conferences in 2022',
    description:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  },{
    image: blog4,
    title1: 'Design',
    date: 'Fab 23, 2022',
    title2:'Design conferences in 2022',
    description:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  },{
    image: blog5,
    title1: 'Design',
    date: 'Fab 23, 2022',
    title2:'Design conferences in 2022',
    description:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  },{
    image: blog6,
    title1: 'Design',
    date: 'Fab 23, 2022',
    title2:'Design conferences in 2022',
    description:'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
  },]
  return (
    <article className="blog active" data-page="blog">

    <header>
      <h2 className="h2 article-title">Blog</h2>
    </header>

    <section className="blog-posts">

      <ul className="blog-posts-list">

 {
  blog?.map((bloger,index)=>{
      return (
        <BlogCard key={index} blog={bloger} />
      )
  })
 }

      </ul>

    </section>

  </article>
  )
}
