import React from "react";
import { Link } from "react-router-dom";
import image from  "../images/shop.jpg";

const Blog = ({ data }) => (
    <Link to = {"/blog/" + data.id}>
    <div className="main-card ">
        <div className="img-container">
            <img src={ data.image } alt="" />
        </div>
        <div className = "card-description">
            <div>
                <h6 className="blog-date">{data.date}</h6>
                <h3 className="head-marg">{ data.title }</h3>
                <p>{ data.discription }</p>
               <div className="writer">
                    <div className = "img-container">
                    <img src= {data.memberImage} alt="writer" />
                    </div>
                    <div >
                        <div className="writer-det">
                            <h3>{ data.memberName}</h3>
                            <p>{ data.memberPosition}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
    </Link>
)
const OtherBlog = ({ blog }) => {
    return(
    <Link to = {"/blog/" + blog.id}>

        <div className="card">
            <div className="img-container">
                <img src={ blog.image } alt="" />
            </div>
            <div className = "card-description">
                <div>
                    <h6 className="blog-date">27 May 2020</h6>

                    <h3 className="head-marg">{ blog.title }</h3>
                    <p>{ blog.discription }</p>
                    <div className="writer">
                    <div className = "img-container">
                        <img src= {blog.memberImage} alt="writer" />
                    </div>
                    <div className="writer-det">
                        <h3>{ blog.memberName}</h3>
                        <p>{ blog.memberPosition}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

const OtherBlogs = ({ data, contain }) => {
    const blogsList = data.map( (blog, index) => {
        return (
            <React.Fragment key = { index }>
                <OtherBlog blog = { blog }  />
            </React.Fragment>
        )})
    return(
        <div className="flex-between">
            { blogsList }
        </div>
    )
}

export { Blog, OtherBlog, OtherBlogs }
