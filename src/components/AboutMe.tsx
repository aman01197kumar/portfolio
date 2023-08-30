import React from "react";
import styles from "../styles/aboutMe.module.scss";
import {myData} from '../assets/Data/myData'

function AboutMe() {
  return (
    <div className="p-3 mt-5">
      <div className="border border-success p-5 ">
        <div className="h3 text-white text-decoration-underline">About Me</div>
        <div className="text-secondary">
          I am filled with wonder and amazement when I witness the enchanting
          world created through live coding. It makes me feel like a magician
          who can perform incredible feats with just a few lines of code. When a
          magnificent virtual world comes to life, it showcases the brilliance
          of an independent and imaginative mind. It captivates the eyes and
          imagination of many, highlighting the true artistry behind the
          creation.
        </div>
        <div className="fs-4 text-white text-decoration-underline mt-5">Education Qualification</div>
        <div className={`d-flex justify-content-between ${styles.flex__container}`}>
      {
        myData?.map(item=>{
          return(
            <div className="text-secondary mt-3 p-2">
        <div className="fs-5 fw-bold">{item?.course}</div>
        <div>{item?.institute}</div>
        <div>{item?.degree}</div>
        <div>{item?.course_year}</div>
        </div>
          )
        })
      }
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
