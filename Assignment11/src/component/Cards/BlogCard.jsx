import React from 'react'

export default function BlogCard({ blog }) {
    console.log('blog',blog)
    return (
        <li className="blog-post-item">
            <a href="#">

                <figure className="blog-banner-box">
                    <img src={blog.image} alt="Design conferences in 2022" loading="lazy" />
                </figure>

                <div className="blog-content">

                    <div className="blog-meta">
                        <p className="blog-category">{blog.title1}</p>

                        <span className="dot"></span>

                        <time datetime="2022-02-23">{blog.date}</time>
                    </div>

                    <h3 className="h3 blog-item-title">{blog.title2}</h3>

                    <p className="blog-text">
                        {blog.description}
                    </p>

                </div>

            </a>
        </li>
    )
}
