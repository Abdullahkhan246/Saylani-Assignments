import React from 'react';
import ServiceCard from '../../component/Cards/ServiceCard';
import TestimonialCard from '../../component/Cards/Testimonial-Card';
import Logo from '../../component/logo/Logo';
import { data,testimonialsData,logo } from '../../constant/about.constant';
import iconquote from '../../assets/images/icon-quote.svg';
export default function About() {

  
  return (
    
     <article class="about  active" data-page="about">

<header>
  <h2 class="h2 article-title">About me</h2>
</header>

<section class="about-text">
  <p>
    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
    I enjoy
    turning complex problems into simple, beautiful and intuitive designs.
  </p>

  <p>
    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
    Moreover, I
    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
    across your
    message and identity in the most creative way. I created web design for many famous brand companies.
  </p>
</section>




<section class="service">

  <h3 class="h3 service-title">What i'm doing</h3>

  <ul class="service-list">
    {
      data.map((item,index)=>{
        return <ServiceCard key={index} buttontext={item.button} image={item.image} title={item.title} description={item.description} />
      })
    }

    {/* <ServiceCard image={icondesgin} title="Web design" description="The most modern and high-quality design made at a professional level." />

    <ServiceCard image={icondev} title="Web development" description="High-quality development of sites at the professional level."
/>

    <ServiceCard image={iconapp} title="Mobile apps" description="Professional development of applications for iOS and Android."/>

    <ServiceCard image={iconphoto} title="Photography" description="I make high-quality photos of any category at a professional level."/> */}

  </ul>

</section>




<section class="testimonials">

  <h3 class="h3 testimonials-title">Testimonials</h3>

  <ul class="testimonials-list has-scrollbar">

  {
      testimonialsData.map((testimonials,index)=>{
        return <TestimonialCard key={index} image={testimonials.image} title={testimonials.title} description={testimonials.description} />
      })
    }


  </ul>

</section>


<div class="modal-container" data-modal-container>

  <div class="overlay" data-overlay></div>

  <section class="testimonials-modal">

    <button class="modal-close-btn" data-modal-close-btn>
      <ion-icon name="close-outline"></ion-icon>
    </button>

    <div class="modal-img-wrapper">
      <figure class="modal-avatar-box">
        {/* <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img/> */}
        {/* <img src={avatar1} alt="Richard hanrick" width="80" /> */}
      </figure>

      {/* <img src="./assets/images/icon-quote.svg" alt="quote icon"/> */}
      {/* <img src={iconquote} alt="Richard hanrick"  /> */}
    </div>

    <div class="modal-content">

      <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

      <time datetime="2021-06-14">14 June, 2021</time>

      <div data-modal-text>
        <p>
          Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
          lot of experience
          and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
          consectetur adipiscing
          elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
        </p>
      </div>

    </div>

  </section>

</div>




<section class="clients">

  <h3 class="h3 clients-title">Clients</h3>

  <ul class="clients-list has-scrollbar">

  {
      logo.map((logo,index)=>{
        return <Logo key={index} logo={logo}  />
      })
    }



  </ul>

</section>

</article>
    
  )
}
