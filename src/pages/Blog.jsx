import React from "react";
import "../components/styles/blog.css";
import { blog } from "../data";
import Back from '../components/common/Back';

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          {blog.map((val,index) => (
            <div className="items shadow" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <div className="admin flexSB">
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-comments"></i>
                    <label htmlFor="">{val.com}</label>
                  </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
